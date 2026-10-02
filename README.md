# POPSTREAM — Modern VOD & Cinema Streaming Platform

[![Next.js](https://img.shields.io/badge/Next.js-16%20(Turbopack)-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.x%20ORM-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io)
[![Vitest](https://img.shields.io/badge/Tests-6%2F6%20Passed-FCC72B?logo=vitest&logoColor=black)](https://vitest.dev)
[![Deployment](https://img.shields.io/badge/Deployed-Vercel-success?logo=vercel&logoColor=white)](https://popstream-rho.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

A high-performance video-on-demand (VOD) cinema streaming application built with **Next.js 16 (App Router & Turbopack)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Prisma ORM**. Featuring full user authentication, watchlist curation, dynamic movie filtering, responsive modal playback, and a verified test suite.

🌐 **Live Production Deployment**: [https://popstream-rho.vercel.app](https://popstream-rho.vercel.app)

---

## 📸 Interface Preview

![POPSTREAM Interface Showcase](docs/screenshot.png)

---

## ✨ Features & Architecture

### 🎬 Streaming UI & Design System
- **Modern Cinema Aesthetics**: Deep Dark (`#0F1115`), Electric Blue (`#3B82F6`), and Vibrant Orange (`#F97316`) color palette.
- **Micro-Interactions**: Floating responsive cards, glassmorphic navigation, gradient typography, and glowing hover states.
- **Dynamic Catalog**: Categorized movie carousels, genre filtering, and rating indicators.

### 🔐 Authentication & Security
- **JWT & Bcrypt**: Password hashing with `bcryptjs` and session tokens powered by `jsonwebtoken`.
- **Protected Endpoints**: Server-side route handlers validating session credentials.

### 🗄️ Database & Data Access Layer
- **Prisma 6 ORM**: Type-safe relational schema modeling `User`, `Movie`, and `Review` models with cascading referential integrity.
- **Prisma Client Singleton**: Safe development connection pooling preventing leak exhaustion during Next.js Hot Module Replacement (HMR).

---

## 📡 API Endpoints

| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user with hashed credentials |
| `POST` | `/api/auth/login` | Authenticate user and issue JWT token |
| `GET` | `/api/movies` | Fetch featured movies and catalog entries |
| `GET` | `/movie/[id]` | Dynamic route serving rich movie details and stream player |

---

## 🧪 Testing Suite (Vitest)

Unit and component tests verify authentication handlers and React UI components.

```bash
npm test
```

```text
 ✓ __tests__/components/SignIn.test.tsx (3 tests)
 ✓ __tests__/api/auth.test.ts (3 tests)

 Test Files  2 passed (2)
      Tests  6 passed (6)
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x, v20.x, or v24.x)
- [npm](https://www.npmjs.com/) (v10+ or v11+)

### 1. Installation
```bash
git clone https://github.com/youssef5520055/popstream.git
cd popstream
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```bash
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secure_random_jwt_secret_here"
```

### 3. Database Migration
```bash
npx prisma db push
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 👥 Contributors & Attribution
- **Younss Yahya** ([@youunss](https://github.com/youunss)) — Architecture, test infrastructure, Prisma integration, and security verification.
- **Youssef** ([@youssef5520055](https://github.com/youssef5520055)) — Frontend design, UI components, and Vercel deployment.
