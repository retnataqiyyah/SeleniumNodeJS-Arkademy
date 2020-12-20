module.exports = function () {
    this.Given(/^user browse regis pages$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access regis pages$/, function () {
        helpers.loadPage(shared.pages.devRegister)
    });
    this.Given(/^user fill fullnames field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillName.performFill()
        })
    });
    this.Given(/^user fill email exist field$/, function () {
        driver.then(function (){
            return page.fillEmailInvalid.performFill()
        })
    });
    this.Given(/^user fill phone number field$/, function () {
        driver.then(function (){
            return page.fillPhone.performFill()
        })
    });
    this.Given(/^user fill psw field$/, function () {
        driver.then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.Given(/^user fill confirm psw field$/, function () {
        driver.then(function (){
            return page.fillConfirmpass.performFill()
        })
    });
    this.Given(/^user click checkbox syarat$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });
    this.When(/^user click button daftar$/, function () {
        driver.sleep(1000).then(function (){
            return page.registerBtn.performClick()
        })
    });
    this.Then(/^register failed with email that already exist$/, function () {
        
      });
}
