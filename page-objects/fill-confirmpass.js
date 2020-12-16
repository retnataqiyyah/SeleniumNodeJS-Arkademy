module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        fillConfirmpass: by.xpath("//input[@placeholder='Masukkan ulang kata sandi']")
    },

    performFill: function () {

        var selector = page.fillConfirmpass.elements.fillConfirmpass;
        return driver.findElement(selector).sendKeys(shared.id.confpass);
    }
};
