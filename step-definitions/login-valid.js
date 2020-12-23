module.exports = function () {
    this.Given(/^user browse Login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    
    this.Given(/^user access Login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });

    this.Given(/^user fill email field$/, function () {
        driver.then(function (){
            return page.fillEmail.performFill()
        })
    });

    this.Given(/^user fill password field$/, function () {
        driver.then(function (){
            return page.fillPassword.performFill()
        })
    });

    this.Given(/^user click checkbox$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });

    this.When(/^user click sign$/, function () {
        driver.sleep(1000).then(function (){
            return page.loginBtn.performClick()
        })
    });
    this.Then(/^Login success$/, function () {
        helpers.loadPage(shared.pages.devHomepage)
    });
}