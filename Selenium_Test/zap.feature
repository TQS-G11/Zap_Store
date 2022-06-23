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

    Scenario: Make a purchase

        Given I'm on the Zap page
        When I'm on login page
        When I enter the username: lucius
        And the password: amogus123
        And click the login button
        Then I'm redirected to dashboard page
        And have lucius present in the navbar
        When I'm on store page
        And I search for the name Among Us
        And I search for the category pen drive
        And I click the first product
        Then product name should contains Among Us
        When I buy 1 of the product
        Then I'm redirected to cart page 
        And cart should contains Among Us
        And I close the driver




