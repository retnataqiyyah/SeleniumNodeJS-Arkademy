module.exports = function () {
    this.Given(/^user browse invalidd3 Login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    
    this.Given(/^user access invalid3 Login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });

    this.Given(/^user fill invalid3 email field$/, function () {
        driver.then(function (){
            return page.fillEmailInvalid3.performFill()
        })
    });

    this.Given(/^user fill invalid3 password field$/, function () {
        driver.then(function (){
            return page.fillPassInvalid3.performFill()
        })
    });

    this.Given(/^user click invalid3 checkbox$/, function () {
        driver.then(function (){
            return page.clickCheckbox.performFill()
        })
      });

    this.When(/^user invalid3 click sign$/, function () {
        driver.sleep(1000).then(function (){
            return page.loginBtn.performClick()
        })
    });
    this.Then(/^Login invalid3$/, function () {
        helpers.loadPage(shared.pages.devHomepage)
    });
}