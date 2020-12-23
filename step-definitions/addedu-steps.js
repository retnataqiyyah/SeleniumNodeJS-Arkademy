module.exports = function () {
    this.Given(/^user browse login page$/, function () {
        helpers.loadPage(shared.pages.devDashboard)
    });
    this.Given(/^user access login page$/, function () {
        helpers.loadPage(shared.pages.devLogin)
    });
    this.Given(/^user fill email field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillEmail.performFill()
       })
    });
    this.Given(/^user fill password field$/, function () {
        driver.sleep(1000).then(function (){
            return page.fillPassword.performFill()
        })
    });
    this.When(/^user click masuk$/, function () {
        driver.sleep(1000).then(function (){
            return page.masukBtn.performClick()
        })
    });
    this.Given(/^user click profile picture$/, function () {
        driver.then(function (){
            return page.profilepicture.performClick()
        })
      });
      this.Given(/^user click profile$/, function () {
        driver.then(function (){
            return page.profileBtn.performClick()
        })
      });
      this.Given(/^user click tambah at Riwayat pendidikan$/, function () {
        driver.sleep(10000).then(function (){
            return page.tambahBtn.performClick()
        })
      });
      this.Given(/^user fill school field$/, function () {
        driver.sleep(10000).then(function (){
            return page.fillSchool.performFill()
        })
    });
    this.Given(/^user fill major field$/, function () {
        driver.then(function (){
            return page.fillMajor.performFill()
        })
    });
    //ENTRY YEAR
      this.Given(/^user click entry year field$/, function () {
        driver.then(function (){
            return page.entryyearBtn.performClick()
        })
      });
      this.Given(/^user click entry 2021$/, function () {
        driver.sleep(5000).then(function (){
            return page.entryBtn.performClick()
        })
      });
    //GRADUATION YEAR
    this.Given(/^user click graduation year field$/, function () {
        driver.then(function (){
            return page.graduationyearBtn.performClick()
        })
      });
      this.Given(/^user click graduation 2023$/, function () {
        driver.sleep(5000).then(function (){
            return page.gradBtn.performClick()
        })
      });
      this.Given(/^user click add edu$/, function () {
        driver.then(function (){
            return page.addeduBtn.performClick()
        })
      });
      this.Given(/^user click preview&save$/, function () {
        driver.then(function (){
            return page.previewBtn.performClick()
        })
      });
      this.Given(/^user click save$/, function () {
        driver.then(function (){
            return page.saveBtn.performClick()
        })
      });
}