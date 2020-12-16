module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillNameInvalid: by.xpath("//input[@placeholder='Masukkan nama lengkap']")
    },

    performFill: function () {

        var selector = page.fillNameInvalid.elements.fillNameInvalid;
        return driver.findElement(selector).sendKeys(shared.id.nameinv);
    }
};
