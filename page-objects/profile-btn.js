module.exports = {
	

	
    url: 'https://www.arkademy.com/bootcamp',


    elements: {
        profileBtn: by.xpath("//div[@class='menu-lainnya']//a[normalize-space()='Profile']")
        
    },


    performClick: function () {
        
        var selector = page.profileBtn.elements.profileBtn;
        // driver.get(page.profileBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};