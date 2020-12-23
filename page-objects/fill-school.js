module.exports = {
	

    url: 'https://www.arkademy.com/profile/update',


    elements: {
        fillSchool: by.xpath("//input[@placeholder='Contoh: SMK Arkademy Bermartabat']")
    },


    performFill: function () {


        var selector = page.fillSchool.elements.fillSchool;
        return driver.findElement(selector).sendKeys(shared.id.school);
    }
};
