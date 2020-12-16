module.exports = function () {
    this.Given(/^user browse register page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access register page$/, function () {
        helpers.loadPage(shared.pages.devRegister)
    });
    this.Given(/^user fill name field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillName.performFill()
        })
    });
    this.Given(/^user fill email field$/, function () {
        driver.then(function (){
            return page.fillEmail.performFill()
        })
    });
    this.Given(/^user fill phone field$/, function () {
        driver.then(function (){
            return page.fillPhone.performFill()
        })
    });
    this.Given(/^user fill password field$/, function () {
        driver.then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.Given(/^user fill confirm password field$/, function () {
        driver.then(function (){
            return page.fillConfirmpass.performFill()
        })
    });
    this.Given(/^user click checkbox$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });
    this.When(/^user click sign$/, function () {
        driver.sleep(1000).then(function (){
            return page.registerBtn.performClick()
        })
    });
    this.Then(/^register success$/, function () {
        helpers.getElementsContainingText('nav[role="navigation"] ul li a', 'Register Success');
    });
}
