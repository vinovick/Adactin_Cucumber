package com.adactin.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.adactin.baseclass.BaseClass;
import com.adactin.property.File_Reader_Manager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", glue = "com\\adactin\\stepdefiniton", monochrome = true, 
plugin = {
		"pretty", 
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html",
		"json:Report/CucumberJSON_Report.json", 
		"html:Report/HTML_Report" })

public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void getup() throws Throwable {
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getBrowser();
		driver = BaseClass.getDriver(browser);
	}

}
