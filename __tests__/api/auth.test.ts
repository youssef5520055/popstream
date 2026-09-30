import { describe, it, expect, vi } from 'vitest';
import { POST as LoginPOST } from '@/app/api/auth/login/route';
import { POST as RegisterPOST } from '@/app/api/auth/register/route';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

// Mock Prisma DB
vi.mock('@/lib/db', () => ({
  db: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
  },
}));

describe('Auth API Endpoints', () => {
  describe('POST /api/auth/login', () => {
    it('returns 400 if fields are missing', async () => {
      const req = new Request('http://localhost/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@test.com' }), // missing password
      });

      const res = await LoginPOST(req);
      const data = await res.json();

      expect(res.status).toBe(400);
      expect(data.error).toBe('Missing required fields');
    });

    it('returns 401 for invalid user', async () => {
      (db.user.findUnique as any).mockResolvedValue(null);

      const req = new Request('http://localhost/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: 'nonexistent@test.com', password: 'password123' }),
      });

      const res = await LoginPOST(req);
      const data = await res.json();

      expect(res.status).toBe(401);
      expect(data.error).toBe('Invalid credentials');
    });

    it('returns 200 and token for valid login', async () => {
      const hashedPassword = await bcrypt.hash('correctpassword', 10);
      (db.user.findUnique as any).mockResolvedValue({
        id: 'user-1',
        email: 'test@test.com',
        password: hashedPassword,
      });

      const req = new Request('http://localhost/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@test.com', password: 'correctpassword' }),
      });

      const res = await LoginPOST(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.token).toBeDefined();
      expect(data.user.email).toBe('test@test.com');
      expect(data.user.password).toBeUndefined();
    });
  });
});
