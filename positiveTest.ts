describe('Sauce Demo Login', () => {

    it('should successfully log in with standard_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })

    it('should fail login with standard_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should successfully log in with problem_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('problem_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })

    it('should fail login with problem_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('problem_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should fail login with locked_out_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('locked_out_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should fail login with locked_out_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('locked_out_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should successfully log in with performance_glitch_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('performance_glitch_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })

    it('should fail login with performance_glitch_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('performance_glitch_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should successfully log in with error_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('error_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })

    it('should fail login with error_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('error_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

    it('should successfully log in with visual_user', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
        await expect(browser).toHaveUrl(expect.stringContaining('inventory'))
    })

    it('should fail login with visual_user wrong password', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('visual_user')
        await $('#password').setValue('wrong_password')
        await $('#login-button').click()
        await expect($('.error-message-container')).toBeDisplayed()
    })

})
