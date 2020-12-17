Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: User access register on arkademy.com
        Given user browse register pages
        And user access register pages
        And user fill name field with numeric
        And user fill invalid e-mail field
        And user fill phones field
        And user fill pass field less than eight character
        And user fill confirm pass field more than eight character
        And user click checkbox syarat ketentuan
        When user click daftar
        Then register failed
