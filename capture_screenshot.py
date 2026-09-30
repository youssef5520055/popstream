import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})
        await page.goto('http://localhost:3001')
        await page.wait_for_timeout(2000)
        await page.screenshot(path='docs/screenshot.png', full_page=True)
        await browser.close()
        print("SCREENSHOT_CAPTURED")

asyncio.run(main())
