Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: User access register on arkademy.com
        Given user browse register pages
        And user access register pages
        And user fill detail name field
        And user fill e-mail field
        And user fill phones field
        And user fill pass field
        And user fill confirm pass field
        And user click checkbox syarat ketentuan
        When user click daftar
        Then register failed
