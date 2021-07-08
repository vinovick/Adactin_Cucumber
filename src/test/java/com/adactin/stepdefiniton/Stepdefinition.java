package com.adactin.stepdefiniton;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.property.File_Reader_Manager;
import com.adactin.property.Page_Object_Manager;
import com.adactin.runner.Runner;

import cucumber.api.Scenario;
import cucumber.api.java.en.*;

public class Stepdefinition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	Page_Object_Manager pom = new Page_Object_Manager(driver);

	@Before // --> Run before every scenario
	public void beforeHooks(Scenario scenario) throws Throwable {
		String status = scenario.getStatus();
		System.out.println("Scenario status : " + status);

	}

	@After // --> Run after every scenario
	public void afterHooks(Scenario scenario) throws Throwable {
		if (scenario.isFailed()) {
			screenshot("C:\\Users\\jaisa\\eclipse-workspace\\Adactin_Project\\Screenshot\\img.png");
		}
		System.out.println("Exit from the page");
	}

	@Given("^User launch the application$")
	public void user_launch_the_application() throws Throwable {
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		getUrl(url);
	}

	@When("^User enter the \"([^\"]*)\" in username field$")
	public void user_enter_the_in_username_field(String arg1) throws Throwable {
		inputValueElement(pom.getInstanceLogin().getUsername(), arg1);
	}

	@When("^User enter the \"([^\"]*)\" in password field$")
	public void user_enter_the_in_password_field(String arg1) throws Throwable {
		inputValueElement(pom.getInstanceLogin().getPassword(), arg1);
	}

	@Then("^User click on the login button and it navigates to the hotel search page$")
	public void user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page() throws Throwable {
		clickOnElement(pom.getInstanceLogin().getLogin());
	}

	@When("^User want to select the location$")
	public void user_want_to_select_the_location() throws Throwable {
		selection(pom.getInstanceSearch().getLocation(), "byVisibleText", "Paris");
	}

	@When("^User want to select the hotel name$")
	public void user_want_to_select_the_hotel_name() throws Throwable {
		selection(pom.getInstanceSearch().getHotels(), "byVisibleText", "Hotel Sunshine");
	}

	@When("^User want to select the room type$")
	public void user_want_to_select_the_room_type() throws Throwable {
		selection(pom.getInstanceSearch().getRoom_type(), "byVisibleText", "Super Deluxe");
	}

	@When("^User want to select the number of rooms$")
	public void user_want_to_select_the_number_of_rooms() throws Throwable {
		selection(pom.getInstanceSearch().getNumer_rooms(), "byValue", "1");
	}

	@When("^User want to clear the check in Date$")
	public void user_want_to_clear_the_check_in_Date() throws Throwable {
		elementClear(pom.getInstanceSearch().getClear_date());
	}

	@When("^User want to select the check in Date$")
	public void user_want_to_select_the_check_in_Date() throws Throwable {
		inputValueElement(pom.getInstanceSearch().getCheck_in_date(), "05/06/2021");
	}

	@When("^User want to clear the check out Date$")
	public void user_want_to_clear_the_check_out_Date() throws Throwable {
		elementClear(pom.getInstanceSearch().getDate_clear());
	}

	@When("^User want to select the check out Date$")
	public void user_want_to_select_the_check_out_Date() throws Throwable {
		inputValueElement(pom.getInstanceSearch().getCheck_out_date(), "12/06/2021");
	}

	@When("^User want to select the Adults per room$")
	public void user_want_to_select_the_Adults_per_room() throws Throwable {
		selection(pom.getInstanceSearch().getAdult_room(), "byValue", "2");
	}

	@When("^User want to selec the Children per room$")
	public void user_want_to_selec_the_Children_per_room() throws Throwable {
		selection(pom.getInstanceSearch().getChild_room(), "byValue", "1");
	}

	@Then("^User click the search button for verification purpose$")
	public void user_click_the_search_button_for_verification_purpose() throws Throwable {
		clickOnElement(pom.getInstanceSearch().getSearch());
	}
}
