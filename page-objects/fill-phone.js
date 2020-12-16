module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillPhone: by.xpath("//input[@placeholder='Masukkan no. handphone']")
    },

    performFill: function () {

        var selector = page.fillPhone.elements.fillPhone;
        return driver.findElement(selector).sendKeys(shared.id.phone);
    }
};
