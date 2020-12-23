# ./features/signin.feature

Feature: Login on the web arkademy.com
    As a user
    I want to be able to Login

    Scenario: Verify Login on arkademy.com features with Invalid Data Email and Password Existing User
        Given user browse invalid Login page
        And user access invalid Login page
        And user fill invalid email field
        And user fill invalid password field
        And user click invalid checkbox
        When user invalid click sign
        Then Login invalid