module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        previewBtn: by.xpath("//button[normalize-space()='Preview & Simpan']")
        
    },


    performClick: function () {
        
        var selector = page.previewBtn.elements.previewBtn;
        // driver.get(page.previewBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
