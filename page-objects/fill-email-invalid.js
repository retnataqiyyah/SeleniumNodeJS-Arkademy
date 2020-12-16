module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillEmail: by.xpath("//input[@placeholder='Masukkan alamat e-mail']")
    },

    performFill: function () {

        var selector = page.fillEmail.elements.fillEmail;
        return driver.findElement(selector).sendKeys(shared.id.emailinv);
    }
};
