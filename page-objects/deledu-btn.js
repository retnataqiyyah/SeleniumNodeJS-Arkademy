module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        deleduBtn: by.xpath("//div[@id='schoolHistory']//div[@class='profile-panel-body']//div//a[@role='button'][normalize-space()='Hapus']")
        
    },


    performClick: function () {
        
        var selector = page.deleduBtn.elements.deleduBtn;
        // driver.get(page.deleduBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
