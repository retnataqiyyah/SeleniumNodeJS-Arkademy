module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        graduationyearBtn: by.xpath("//input[@placeholder='Contoh: 2019']")
        
    },


    performClick: function () {
        
        var selector = page.graduationyearBtn.elements.graduationyearBtn;
        // driver.get(page.graduationyearBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
