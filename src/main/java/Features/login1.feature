Feature:

  Scenario Outline:FreeCRM Test Title
  Given user is already on search page
  When user enters "<keywords>" and "<location>"and "<distance>"
  And user clicks on search button
  Then close the browser
  Examples:
    | keywords | location |distance|
    | Automation Tester | London|up to 15miles|
    | Automation Engineer | London|up to 1 mile|
    | Receptionist| Lothian|up to 1 mile|
    | Java Developer | London|up to 10 mile|

