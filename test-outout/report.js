$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/lasya/CucumberFramework/src/main/java/Features/login1.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "# @Search"
    },
    {
      "line": 3,
      "value": "#Scenario:Cogmento CRM login"
    },
    {
      "line": 5,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 6,
      "value": "# When title of login page is Free CRM"
    },
    {
      "line": 7,
      "value": "# Then user enters \"sridevi.sura@gmail.com\" and \"test@123\""
    },
    {
      "line": 8,
      "value": "# Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#Then user is on home page"
    }
  ],
  "line": 11,
  "name": "FreeCRM Test Title",
  "description": "",
  "id": ";freecrm-test-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is already on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003ckeywords\u003e\" and \"\u003clocation\u003e\"and \"\u003cdistance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": ";freecrm-test-title;",
  "rows": [
    {
      "cells": [
        "keywords",
        "location",
        "distance"
      ],
      "line": 17,
      "id": ";freecrm-test-title;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 15miles"
      ],
      "line": 18,
      "id": ";freecrm-test-title;;2"
    },
    {
      "cells": [
        "Automation Engineer",
        "London",
        "up to 1 mile"
      ],
      "line": 19,
      "id": ";freecrm-test-title;;3"
    },
    {
      "cells": [
        "Receptionist",
        "Lothian",
        "up to 1 mile"
      ],
      "line": 20,
      "id": ";freecrm-test-title;;4"
    },
    {
      "cells": [
        "Java Developer",
        "London",
        "up to 10 mile"
      ],
      "line": 21,
      "id": ";freecrm-test-title;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "FreeCRM Test Title",
  "description": "",
  "id": ";freecrm-test-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is already on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters \"Automation Tester\" and \"London\"and \"up to 15miles\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 6076827200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 13
    },
    {
      "val": "London",
      "offset": 37
    },
    {
      "val": "up to 15miles",
      "offset": 49
    }
  ],
  "location": "loginStepdefinitions.user_enters_and_Vipullasya(String,String,String)"
});
formatter.result({
  "duration": 356953400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3092067200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 832074100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "FreeCRM Test Title",
  "description": "",
  "id": ";freecrm-test-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is already on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters \"Automation Engineer\" and \"London\"and \"up to 1 mile\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 5672527800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Engineer",
      "offset": 13
    },
    {
      "val": "London",
      "offset": 39
    },
    {
      "val": "up to 1 mile",
      "offset": 51
    }
  ],
  "location": "loginStepdefinitions.user_enters_and_Vipullasya(String,String,String)"
});
formatter.result({
  "duration": 457447100,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3112722800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1269962900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "FreeCRM Test Title",
  "description": "",
  "id": ";freecrm-test-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is already on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters \"Receptionist\" and \"Lothian\"and \"up to 1 mile\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 4972914500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Receptionist",
      "offset": 13
    },
    {
      "val": "Lothian",
      "offset": 32
    },
    {
      "val": "up to 1 mile",
      "offset": 45
    }
  ],
  "location": "loginStepdefinitions.user_enters_and_Vipullasya(String,String,String)"
});
formatter.result({
  "duration": 1589703000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3053013200,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 833460500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "FreeCRM Test Title",
  "description": "",
  "id": ";freecrm-test-title;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is already on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters \"Java Developer\" and \"London\"and \"up to 10 mile\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 4903959000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Developer",
      "offset": 13
    },
    {
      "val": "London",
      "offset": 34
    },
    {
      "val": "up to 10 mile",
      "offset": 46
    }
  ],
  "location": "loginStepdefinitions.user_enters_and_Vipullasya(String,String,String)"
});
formatter.result({
  "duration": 356876800,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3072578600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1269596000,
  "status": "passed"
});
});