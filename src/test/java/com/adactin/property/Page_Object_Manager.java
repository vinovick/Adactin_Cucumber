package com.adactin.property;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.Login_Page;
import com.adactin.pom.Search_Hotel;

public class Page_Object_Manager {

	public static WebDriver driver;

	private Login_Page login;

	private Search_Hotel search;

	public Page_Object_Manager(WebDriver Ldriver) {
		this.driver = Ldriver;
		PageFactory.initElements(Ldriver, this);
	}

	public Login_Page getInstanceLogin() {
		login = new Login_Page(driver);
		return login;
	}

	public Search_Hotel getInstanceSearch() {
		search = new Search_Hotel(driver);
		return search;
	}
}
