module.exports = function () {
    this.Given(/^user browse register pages$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access register pages$/, function () {
        helpers.loadPage(shared.pages.devRegister)
    });
    this.Given(/^user fill detail name field$/, function () {
        driver.then(function (){
            return page.fillNameInvalid.performFill()
        })
    });
    this.Given(/^user fill e-mail field$/, function () {
        driver.then(function (){
            return page.fillEmailInvalid.performFill()
        })
    });
    this.Given(/^user fill phones field$/, function () {
        driver.then(function (){
            return page.fillPhone.performFill()
        })
    });
    this.Given(/^user fill pass field$/, function () {
        driver.then(function (){
            return page.fillPasswordInvalid.performFill()
        })
    });
    this.Given(/^user fill confirm pass field$/, function () {
        driver.then(function (){
            return page.fillConfirmpass.performFill()
        })
    });
    this.Given(/^user click checkbox syarat ketentuan$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });
    this.When(/^user click daftar$/, function () {
        driver.then(function (){
            return page.registerBtn.performClick()
        })
    });
    this.Then(/^register failed$/, function () {
        helpers.getElementsContainingText('nav[role="navigation"] ul li a', 'Register Failed');
    });
}
