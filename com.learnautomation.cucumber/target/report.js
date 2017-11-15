$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gmail2.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "validate user name",
  "description": "",
  "id": "login;validate-user-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter userid as \"\u003cx\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click next button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate userid with \"\u003cy\u003e\" criteria",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login;validate-user-name;",
  "rows": [
    {
      "cells": [
        "x",
        "y"
      ],
      "line": 10,
      "id": "login;validate-user-name;;1"
    },
    {
      "cells": [
        "ashudulla",
        "valid"
      ],
      "line": 11,
      "id": "login;validate-user-name;;2"
    },
    {
      "cells": [
        "ashs96jjf",
        "invalid"
      ],
      "line": 12,
      "id": "login;validate-user-name;;3"
    },
    {
      "cells": [
        "",
        "invalid"
      ],
      "line": 13,
      "id": "login;validate-user-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "validate user name",
  "description": "",
  "id": "login;validate-user-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch gmail site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter userid as \"ashudulla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click next button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "validate userid with \"valid\" criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Gmail_Cucumber.method2()"
});
