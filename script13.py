import sys

content = '''@import "tailwindcss";

@theme {
  --font-sans: var(--font-poppins), ui-sans-serif, system-ui, sans-serif;
  --font-righteous: var(--font-righteous), cursive;
}
'''

with open('src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(content)
