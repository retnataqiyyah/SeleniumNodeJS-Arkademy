# ./features/signin.feature

Feature: Login on the web arkademy.com
    As a user
    I want to be able to Login 

    Scenario: Verify Login on arkademy.com features with Invalid Data Email Existing User 
        Given user browse invalidd3 Login page
        And user access invalid3 Login page
        And user fill invalid3 email field
        And user fill invalid3 password field
        And user click invalid3 checkbox
        When user invalid3 click sign
        Then Login invalid3