Feature: Regis
    As a user
    I want to be not able to regis with already email registered

    Scenario: Registration failed with already email registered on Arkademy before
      Given user browse regis pages
        And user access regis pages
        And user fill fullnames field
        And user fill email exist field
        And user fill phone number field
        And user fill psw field
        And user fill confirm psw field
        And user click checkbox syarat
        When user click button daftar
        Then register failed with email that already exist