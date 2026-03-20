describe('Sauce Demo Login', () => {
    it('should successfully log in', async () => {
        // 1. Go to the website
        await browser.url('https://www.saucedemo.com/')
        
        // 2. Find the username field and type in it
        await $('#user-name').setValue('standard_user')
        
        // 3. Find the password field and type in it
        await $('#password').setValue('secret_sauce')
        
        // 4. Click the login button
        await $('#login-button').click()
        
        // 5. Check we actually logged in
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })
})