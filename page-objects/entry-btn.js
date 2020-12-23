module.exports = {
	

    url: ' https://www.arkademy.com/profile/update ',


    elements: {
        entryBtn: by.xpath("//body/main/section/section/main/section[@id='app']/section[@id='default-download']/section[@class='col-lg-12 col-md-12 col-sm-12']/section[@class='row']/section[@class='col-lg-8 col-md-12 col-sm-12']/section[@id='editableSection']/div[@id='schoolHistory']/div[@class='profile-panel-body']/div/div[@class='row']/div[1]/div[1]/div[2]/span[2]")
        
    },


    performClick: function () {
        
        var selector = page.entryBtn.elements.entryBtn;
        // driver.get(page.entryBtn.elements.url);
        return driver.findElement(selector).click(selector);
}
};
