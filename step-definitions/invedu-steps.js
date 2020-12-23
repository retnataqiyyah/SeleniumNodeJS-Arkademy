module.exports = function () {
    this.Given(/^user browse login_page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access login_page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });
    this.Given(/^user fill email_field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillEmail.performFill()
       })
    });
    this.Given(/^user fill password_field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.When(/^user click masuk_$/, function () {
        driver.sleep(1000).then(function (){
            return page.masukBtn.performClick()
        })
    });
    this.Given(/^user click profile_picture$/, function () {
        driver.then(function (){
            return page.profilepicture.performClick()
        })
      });
      this.Given(/^user click profile_$/, function () {
        driver.then(function (){
            return page.profileBtn.performClick()
        })
      });
      this.Given(/^user click tambah_at Riwayat pendidikan$/, function () {
        driver.sleep(10000).then(function (){
            return page.tambahBtn.performClick()
        })
      });
      this.Given(/^user fill school_field$/, function () {
        driver.sleep(10000).then(function (){
            return page.fillNoschool.performFill()
        })
    });
    this.Given(/^user fill major_field$/, function () {
        driver.then(function (){
            return page.fillMajor.performFill()
        })
    });
    //ENTRY YEAR
    this.Given(/^user click entry_year field$/, function () {
        driver.then(function (){
            return page.entryyearBtn.performClick()
        })
      });
      this.Given(/^user click entry_2021$/, function () {
        driver.sleep(5000).then(function (){
            return page.entryBtn.performClick()
        })
      });
    //GRADUATION YEAR
    this.Given(/^user click graduation_year field$/, function () {
        driver.then(function (){
            return page.graduationyearBtn.performClick()
        })
      });
      this.Given(/^user click graduation_2023$/, function () {
        driver.sleep(5000).then(function (){
            return page.gradBtn.performClick()
        })
      });
      this.Given(/^user click add_edu$/, function () {
        driver.then(function (){
            return page.addeduBtn.performClick()
        })
      });
      this.Given(/^user click preview&save_$/, function () {
        driver.then(function (){
            return page.previewBtn.performClick()
        })
      });
      this.Given(/^user click save_$/, function () {
        driver.then(function (){
            return page.saveBtn.performClick()
        })
      });
}