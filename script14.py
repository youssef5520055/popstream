import sys

with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('className={ }', 'className={\ \}')

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Github, Twitter, Facebook', 'Globe, Mail, MessageCircle')
content = content.replace('<Facebook', '<Globe')
content = content.replace('<Twitter', '<Mail')
content = content.replace('<Github', '<MessageCircle')

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
