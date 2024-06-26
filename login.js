const { chromium } = require('playwright');

(async () => {
    // Launch browser
    const browser = await chromium.launch({ headless: false }); // Set headless to true if you don't want to see the browser
    const page = await browser.newPage();
    
    // Navigate to Facebook login page
    await page.goto('https://www.facebook.com/');

    // Enter username
    await page.fill('input[name="email"]', 'your-email@example.com');
    
    // Enter password
    await page.fill('input[name="pass"]', 'your-password');
    
    // Click login button
    await page.click('button[name="login"]');
    
    // Optionally, take a screenshot after logging in
    await page.screenshot({ path: 'facebook-login.png' });
    
    // Close browser
    await browser.close();
})();
