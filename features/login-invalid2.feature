# ./features/signin.feature

Feature: Login on the web arkademy.com
    As a user
    I want to be able to Login 

    Scenario: Verify Login on arkademy.com features with Invalid Data Email Existing User 
        Given user browse invalidd2 Login page
        And user access invalid2 Login page
        And user fill invalid2 email field
        And user fill invalid2 password field
        And user click invalid2 checkbox
        When user invalid2 click sign
        Then Login invalid2