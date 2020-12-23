module.exports = {
	

    url: 'https://www.arkademy.com/profile/update',


    elements: {
        fillMajor: by.xpath("//input[@placeholder='Contoh: Rekayasa Perangkat Lunak']")
    },


    performFill: function () {


        var selector = page.fillMajor.elements.fillMajor;
        return driver.findElement(selector).sendKeys(shared.id.major);
    }
};
