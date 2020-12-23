# ./features/signin.feature

Feature: Login on the web arkademy.com
    As a user
    I want to be able to Login 

    Scenario: Verify Login on arkademy.com features with Valid Data Existing User
        Given user browse Login page
        And user access Login page
        And user fill email field
        And user fill password field
        And user click checkbox
        When user click sign
        Then Login success
        