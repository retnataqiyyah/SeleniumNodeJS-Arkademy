Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: register failed on arkademy with password less than eight character
        Given user browse register pages
        And user access register pages
        And user fill names field
        And user fill invalid e-mail field
        And user fill phones field
        And user fill pass field less than eight character
        And user fill confirm pass field more than eight character
        And user click checkbox syarat ketentuan
        When user click daftar
        Then register failed
