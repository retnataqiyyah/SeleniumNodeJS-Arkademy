module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillPassword: by.xpath("//input[@placeholder='Masukkan kata sandi']")
    },

    performFill: function () {

        var selector = page.fillPassword.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.id.pass);
    }
};
