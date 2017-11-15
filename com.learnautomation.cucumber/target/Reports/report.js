$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fb1.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Testing",
  "description": "",
  "id": "facebook-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login checking",
  "description": "",
  "id": "facebook-testing;login-checking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"\u003cx\u003e\" and password as \"\u003cy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate userid with criteria \"\u003cr\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate password with criteria \"\u003cr\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close fb site",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-testing;login-checking;",
  "rows": [
    {
      "cells": [
        "x",
        "y",
        "r"
      ],
      "line": 12,
      "id": "facebook-testing;login-checking;;1"
    },
    {
      "cells": [
        "9949457356",
        "Ashu,128793#",
        "valid"
      ],
      "line": 13,
      "id": "facebook-testing;login-checking;;2"
    },
    {
      "cells": [
        "996hkk6866",
        "Ashu,128793#",
        "valid"
      ],
      "line": 14,
      "id": "facebook-testing;login-checking;;3"
    },
    {
      "cells": [
        "9949457356",
        "Ash6khk,6656",
        "valid"
      ],
      "line": 15,
      "id": "facebook-testing;login-checking;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login checking",
  "description": "",
  "id": "facebook-testing;login-checking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"9949457356\" and password as \"Ashu,128793#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate userid with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate password with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close fb site",
  "keyword": "And "
});
formatter.match({
  "location": "Fb_Cucumber.method1()"
});
formatter.result({
  "duration": 21028341155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9949457356",
      "offset": 17
    },
    {
      "val": "Ashu,128793#",
      "offset": 46
    }
  ],
  "location": "Fb_Cucumber.method2(String,String)"
});
formatter.result({
  "duration": 6442052432,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Cucumber.method3()"
});
formatter.result({
  "duration": 54474880364,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 33
    }
  ],
  "location": "Fb_Cucumber.method5(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Cucumber.method6()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Login checking",
  "description": "",
  "id": "facebook-testing;login-checking;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"996hkk6866\" and password as \"Ashu,128793#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate userid with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate password with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close fb site",
  "keyword": "And "
});
formatter.match({
  "location": "Fb_Cucumber.method1()"
});
formatter.result({
  "duration": 20386142465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "996hkk6866",
      "offset": 17
    },
    {
      "val": "Ashu,128793#",
      "offset": 46
    }
  ],
  "location": "Fb_Cucumber.method2(String,String)"
});
formatter.result({
  "duration": 6412197895,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Cucumber.method3()"
});
formatter.result({
  "duration": 12724150743,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 33
    }
  ],
  "location": "Fb_Cucumber.method5(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Cucumber.method6()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Login checking",
  "description": "",
  "id": "facebook-testing;login-checking;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open facebook site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter userid as \"9949457356\" and password as \"Ash6khk,6656\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate userid with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "validate password with criteria \"valid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close fb site",
  "keyword": "And "
});
formatter.match({
  "location": "Fb_Cucumber.method1()"
});
formatter.result({
  "duration": 19243150648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9949457356",
      "offset": 17
    },
    {
      "val": "Ash6khk,6656",
      "offset": 46
    }
  ],
  "location": "Fb_Cucumber.method2(String,String)"
});
formatter.result({
  "duration": 6419016584,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Cucumber.method3()"
});
formatter.result({
  "duration": 7839078012,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 33
    }
  ],
  "location": "Fb_Cucumber.method5(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Cucumber.method6()"
});
formatter.result({
  "status": "skipped"
});
});