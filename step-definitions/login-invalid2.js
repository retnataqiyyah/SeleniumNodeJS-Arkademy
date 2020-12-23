module.exports = function () {
    this.Given(/^user browse invalidd2 Login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    
    this.Given(/^user access invalid2 Login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });

    this.Given(/^user fill invalid2 email field$/, function () {
        driver.then(function (){
            return page.fillEmailInvalid2.performFill()
        })
    });

    this.Given(/^user fill invalid2 password field$/, function () {
        driver.then(function (){
            return page.fillPassInvalid2.performFill()
        })
    });

    this.Given(/^user click invalid2 checkbox$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });

    this.When(/^user invalid2 click sign$/, function () {
        driver.sleep(1000).then(function (){
            return page.loginBtn.performClick()
        })
    });
    this.Then(/^Login invalid2$/, function () {
        helpers.loadPage(shared.pages.devHomepage)
    });
}