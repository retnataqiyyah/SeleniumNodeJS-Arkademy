module.exports = function () {
    this.Given(/^user browse invalid Login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    
    this.Given(/^user access invalid Login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });

    this.Given(/^user fill invalid email field$/, function () {
        driver.then(function (){
            return page.fillEmailInvalid.performFill()
        })
    });

    this.Given(/^user fill invalid password field$/, function () {
        driver.then(function (){
            return page.fillPassInvalid.performFill()
        })
    });

    this.Given(/^user click invalid checkbox$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });

    this.When(/^user invalid click sign$/, function () {
        driver.sleep(1000).then(function (){
            return page.loginBtn.performClick()
        })
    });
    this.Then(/^Login invalid$/, function () {
        helpers.loadPage(shared.pages.devHomepage)
    });
}