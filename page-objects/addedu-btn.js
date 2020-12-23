module.exports = {
	

	
    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        addeduBtn: by.xpath("//div[@id='schoolHistory']//button[@class='edit block rounded'] ")
        
    },


    performClick: function () {
        
        var selector = page.addeduBtn.elements.addeduBtn;
        // driver.get(page.addeduBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
