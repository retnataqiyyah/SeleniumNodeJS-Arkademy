Feature: Add edu on the web
	    As a user
	    I want to be able to add education
	

	    Scenario: User access login_on arkademy
            Given user browse login_page
            And user access login_page
            And user fill email_field
            And user fill password_field
            And user click masuk_
            And user click profile_picture
            And user click profile_
            And user click tambah_at Riwayat pendidikan
            And user fill school_field
            And user fill major_field
            And user click entry_year field
            And user click entry_2021
            And user click graduation_year field
            And user click graduation_2023
            And user click add_edu
            And user click preview&save_
			Then user click save_