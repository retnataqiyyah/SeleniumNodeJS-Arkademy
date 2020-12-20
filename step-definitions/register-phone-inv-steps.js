module.exports = function () {
    this.Given(/^user browse regist pages$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access regist pages$/, function () {
        helpers.loadPage(shared.pages.devRegister)
    });
    this.Given(/^user fill full names field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillName.performFill()
        })
    });
    this.Given(/^user fill e-mail field$/, function () {
        driver.then(function (){
            return page.fillEmail.performFill()
        })
    });
    this.Given(/^user fill invalid phones field$/, function () {
        driver.then(function (){
            return page.fillPhoneInvalid.performFill()
        })
    });
    this.Given(/^user fill passw field$/, function () {
        driver.then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.Given(/^user fill confirm passw field$/, function () {
        driver.then(function (){
            return page.fillConfirmpass.performFill()
        })
    });
    this.Given(/^user click checkbox syarat & ketentuan$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });
    this.When(/^user click btn daftar$/, function () {
        driver.sleep(1000).then(function (){
            return page.registerBtn.performClick()
        })
    });
    this.Then(/^register failed with wrong phone number$/, function () {
        
      });
}
