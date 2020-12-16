module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillName: by.xpath("//input[@placeholder='Masukkan nama lengkap']")
    },

    performFill: function () {

        var selector = page.fillName.elements.fillName;
        return driver.findElement(selector).sendKeys(shared.id.name);
    }
};
