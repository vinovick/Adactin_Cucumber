Feature: Hotel Booking Functionality 

Background: User want to login in the application 
	Given  User launch the application 
	When  User enter the "vinovicky" in username field 
	And   User enter the "Jan@2020" in password field 
	Then  User click on the login button and it navigates to the hotel search page 
	
	
@Login 
Scenario Outline: User want to login in the application 
	Given  User launch the application 
	When  User enter the "<Username>" in username field 
	And   User enter the "<Password>" in password field 
	Then  User click on the login button and it navigates to the hotel search page 
	
	Examples: 
	
		|Username|Password|
		|AAA|1234|
		|BBB|56789|
		|vinovicky|Jan@2020|
		
		@SmokeTest 
		Scenario: User want to searching the hotel room 
			When  User want to select the location 
			And  User want to select the hotel name 
			And  User want to select the room type 
			And  User want to select the number of rooms 
			And  User want to clear the check in Date 
			And  User want to select the check in Date 
			And  User want to clear the check out Date 
			And  User want to select the check out Date 
			And  User want to select the Adults per room 
			And  User want to selec the Children per room 
			Then  User click the search button for verification purpose