$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User want to login in the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"\u003cUsername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the \"\u003cPassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-in-the-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 19,
      "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;1"
    },
    {
      "cells": [
        "AAA",
        "1234"
      ],
      "line": 20,
      "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;2"
    },
    {
      "cells": [
        "BBB",
        "56789"
      ],
      "line": 21,
      "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;3"
    },
    {
      "cells": [
        "vinovicky",
        "Jan@2020"
      ],
      "line": 22,
      "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User want to login in the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"Jan@2020\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 4238102600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 452898100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 377392900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 334289300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User want to login in the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"AAA\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the \"1234\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 325743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 231038600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 136562800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 31852100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login in the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"Jan@2020\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 418065700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 232119100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 130583100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 23346700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User want to login in the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"BBB\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the \"56789\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 549915700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 187338700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56789",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 104161800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 27492500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login in the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"Jan@2020\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 292565800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 368514600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 142440400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 25238700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User want to login in the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"vinovicky\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter the \"Jan@2020\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 270992100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 216755100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 137836000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 30904300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User want to login in the application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the \"vinovicky\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter the \"Jan@2020\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on the login button and it navigates to the hotel search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_the_application()"
});
formatter.result({
  "duration": 267757900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_username_field(String)"
});
formatter.result({
  "duration": 254647200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 16
    }
  ],
  "location": "Stepdefinition.user_enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 119277800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_login_button_and_it_navigates_to_the_hotel_search_page()"
});
formatter.result({
  "duration": 25157100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User want to searching the hotel room",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-searching-the-hotel-room",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User want to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User want to select the hotel name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User want to select the room type",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User want to select the number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User want to clear the check in Date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User want to select the check in Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User want to clear the check out Date",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User want to select the check out Date",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User want to select the Adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User want to selec the Children per room",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click the search button for verification purpose",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_location()"
});
formatter.result({
  "duration": 31032400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ALGKGPH\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\jaisa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61607}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e6ed3efa26c2b933e72ffb403eb2eb8f\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactin.baseclass.BaseClass.selection(BaseClass.java:164)\r\n\tat com.adactin.stepdefiniton.Stepdefinition.user_want_to_select_the_location(Stepdefinition.java:59)\r\n\tat ✽.When User want to select the location(Adactin.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_hotel_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_room_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_number_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_clear_the_check_in_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_check_in_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_clear_the_check_out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_check_out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_select_the_Adults_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_want_to_selec_the_Children_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_click_the_search_button_for_verification_purpose()"
});
formatter.result({
  "status": "skipped"
});
});