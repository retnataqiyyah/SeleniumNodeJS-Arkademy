Feature: Register on the web
    As a user
    I want to be able to register

    Scenario: User access register on arkademy
        Given user browse register page
        And user access register page
        And user fill name field
        And user fill email field
        And user fill phone field
        And user fill password field
        And user fill confirm password field
        And user click checkbox
        When user click sign
        Then register success
