Feature: TestMart checkout

  # Day 3:
  # Convert selected manual test cases into business-readable scenarios.
  # Keep scenarios focused on behaviour rather than implementation details.

  Scenario: View the checkout product
    Given I have opened TestMart Checkout
    Then I should see the USB-C Travel Charger

  @learner
  Scenario: Apply a valid promotional code
    Given I have opened TestMart Checkout
    When I apply the valid promotional code
    Then the promotional code should be accepted
