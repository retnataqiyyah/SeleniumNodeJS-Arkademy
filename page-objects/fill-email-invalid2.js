module.exports = {

    url: 'https://sso.arkademy.com/auth/realms/production/protocol/openid-connect/auth?client_id=arkademy-production-client&scope=openid%20email&response_type=code&redirect_uri=https%3A%2F%2Fservices.arkademy.com%2Fauth%2Flogin%2Fverify%3Ftoken%3Da4965c5d770573941865d1a0744dd075&nonce=284b2ed5-ad83-460f-b534-ebb1dd5f522e&client_name=arkademy-prod',

    elements: {
        fillEmailInvalid2: by.xpath("//input[@id='username']")
    },

    performFill: function () {

        var selector = page.fillEmailInvalid2.elements.fillEmailInvalid2;
        return driver.findElement(selector).sendKeys(shared.id.emailinv2);
    }
};