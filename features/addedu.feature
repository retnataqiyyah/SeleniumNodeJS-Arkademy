Feature: Add edu on the web
	    As a user
	    I want to be able to add education
	

	    Scenario: User access login on arkademy
	        Given user browse login page
			And user access login page
			And user fill email field
			And user fill password field
			And user click masuk
			And user click profile picture
			And user click profile
			And user click tambah at Riwayat pendidikan
			And user fill school field
			And user fill major field
			And user click entry year field
			And user click entry 2021
			And user click graduation year field
			And user click graduation 2023
			And user click add edu
			And user click preview&save
			Then user click save
