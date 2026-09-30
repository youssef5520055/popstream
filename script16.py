import sys

with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className={\ \}', 'className={poppins.variable + \" \" + righteous.variable}')

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
