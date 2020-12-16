module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        clickCheckbox: by.xpath("//input[@id='check']")
    },

    performFill: function () {

        var selector = page.clickCheckbox.elements.clickCheckbox;
        return driver.findElement(selector).click(selector);
    }
};
