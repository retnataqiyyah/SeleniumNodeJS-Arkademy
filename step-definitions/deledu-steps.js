module.exports = function () {
    this.Given(/^user browse_login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access_login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });
    this.Given(/^user fill_email field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillEmail.performFill()
       })
    });
    this.Given(/^user fill_password field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.When(/^user click_masuk$/, function () {
        driver.sleep(1000).then(function (){
            return page.masukBtn.performClick()
        })
    });
    this.Given(/^user click_profile picture$/, function () {
        driver.then(function (){
            return page.profilepicture.performClick()
        })
      });
      this.Given(/^user click_profile$/, function () {
        driver.then(function (){
            return page.profileBtn.performClick()
        })
      });
      this.Given(/^user click_tambah at Riwayat pendidikan$/, function () {
        driver.sleep(10000).then(function (){
            return page.tambahBtn.performClick()
        })
      });
      this.Given(/^user click_hapus$/, function () {
        driver.sleep(10000).then(function (){
            return page.deleduBtn.performClick()
        })
      });
      this.Given(/^user click_preview&save$/, function () {
        driver.then(function (){
            return page.previewBtn.performClick()
        })
      });
      this.Given(/^user click_save$/, function () {
        driver.then(function (){
            return page.saveBtn.performClick()
        })
      });
}