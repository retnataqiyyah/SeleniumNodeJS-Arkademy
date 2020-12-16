module.exports = {

    url: 'https://www.arkademy.com/auth/signup/',

    elements: {
        registerBtn: by.xpath("//button[@class='primary block']")
        
    },

    performClick: function () {
        
        var selector = page.registerBtn.elements.registerBtn;
        // driver.get(page.registerBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
