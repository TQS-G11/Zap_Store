Feature: Zap

    Scenario: Login - Success

        Given I'm on the Zap page
        When I'm on login page
        When I enter the username: lucius
        And the password: amogus123
        And click the login button
        Then I'm redirected to dashboard page
        And have lucius present in the navbar
        And I close the driver