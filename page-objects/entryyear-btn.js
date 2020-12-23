module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        entryyearBtn: by.xpath("//input[@placeholder='Contoh: 2015']")
        
    },


    performClick: function () {
        
        var selector = page.entryyearBtn.elements.entryyearBtn;
        // driver.get(page.entryyearBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
