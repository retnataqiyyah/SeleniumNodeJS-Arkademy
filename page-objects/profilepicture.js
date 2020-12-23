module.exports = {
	

	
    url: 'https://www.arkademy.com/bootcamp',


    elements: {
        profilepicture: by.xpath("//span[@class='avatar-section']")
        
    },


    performClick: function () {
        
        var selector = page.profilepicture.elements.profilepicture;
        // driver.get(page.profilepicture.elements.url);
        return driver.findElement(selector).click(selector);
}
};