Scenario: Go to Login Page

    Given I'm on the dashboard
    When I click the login button
    Then I'm redirected to login page

Scenario: Login - Success

    Given I'm on login page
    When I enter the username: "Bob the Builder"
    And the password: "password123"
    Then I'm redirected to dashboard page

Scenario: Login - Fail

    Given I'm on login page
    When I enter the username: "Bob the Builder"
    And the password: "fakepass"
    Then I should check error message: "username/password incorrect"