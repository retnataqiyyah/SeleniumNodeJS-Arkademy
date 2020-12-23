module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        saveBtn: by.xpath("//span[contains(text(),'Simpan')]")
        
    },


    performClick: function () {
        
        var selector = page.saveBtn.elements.saveBtn;
        // driver.get(page.saveBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
