Feature: Del edu on the web
	    As a user
	    I want to be able to delete education
	

	    Scenario: User access_login on arkademy
	        Given user browse_login page
			And user access_login page
			And user fill_email field
			And user fill_password field
			And user click_masuk
			And user click_profile picture
			And user click_profile
			And user click_tambah at Riwayat pendidikan
			And user click_hapus
			And user click_preview&save
			Then user click_save
