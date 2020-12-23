module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        tambahBtn: by.xpath("//div[2]//div[1]//div[1]//div[2]//span[1]//a[1]")
        
    },


    performClick: function () {
        
        var selector = page.tambahBtn.elements.tambahBtn;
        // driver.get(page.tambahBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
