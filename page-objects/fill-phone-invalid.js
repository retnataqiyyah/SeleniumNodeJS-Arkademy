module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillPhoneInvalid: by.xpath("//input[@placeholder='Masukkan no. handphone']")
    },

    performFill: function () {

        var selector = page.fillPhoneInvalid.elements.fillPhoneInvalid;
        return driver.findElement(selector).sendKeys(shared.id.phoneinv);
    }
};
