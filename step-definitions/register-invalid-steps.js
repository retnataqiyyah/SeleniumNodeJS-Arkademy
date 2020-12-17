module.exports = function () {
    this.Given(/^user browse register pages$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access register pages$/, function () {
        helpers.loadPage(shared.pages.devRegister)
    });
    this.Given(/^user fill name field with numeric$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillNameInvalid.performFill()
        })
    });
    this.Given(/^user fill invalid e-mail field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillEmailInvalid.performFill()
        })
    });
    this.Given(/^user fill phones field$/, function () {
        driver.then(function (){
            return page.fillPhone.performFill()
        })
    });
    this.Given(/^user fill pass field less than eight character$/, function () {
        driver.then(function (){
            return page.fillPasswordInvalid.performFill()
        })
    });
    this.Given(/^user fill confirm pass field more than eight character$/, function () {
        driver.then(function (){
            return page.fillConfirmpass.performFill()
        })
    });
    this.Given(/^user click checkbox syarat ketentuan$/, function () {
        driver.sleep(1000).then(function (){
            return page.clickCheckbox.performFill()
        })
      });
    this.When(/^user click daftar$/, function () {
        driver.sleep(1000).then(function (){
            return page.registerBtn.performClick()
        })
    });
    this.Then(/^register failed$/, function () {
        helpers.getElementsContainingText('nav[role="navigation"] ul li a', 'Register Failed');
    });
}
