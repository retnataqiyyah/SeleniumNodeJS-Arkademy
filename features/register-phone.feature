Feature: Register on the web
    As a user
    I want to not be able to register

    Scenario: register failed on arkademy with wrong phone number 
        Given user browse regist pages
        And user access regist pages
        And user fill full names field
        And user fill e-mail field
        And user fill invalid phones field
        And user fill passw field
        And user fill confirm passw field
        And user click checkbox syarat & ketentuan
        When user click btn daftar
        Then register failed with wrong phone number 
