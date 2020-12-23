module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        gradBtn: by.xpath("//div[@id='schoolHistory']//div[@class='profile-panel-body']//div[2]//div[1]//div[2]//span[4]")
        
    },


    performClick: function () {
        
        var selector = page.gradBtn.elements.gradBtn;
        // driver.get(page.gradBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
