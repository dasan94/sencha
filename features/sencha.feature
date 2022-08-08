Feature: Automation Sencha Examples

  Scenario: Test page Buttons Sections
    Given I want visit "kitchensink" page
    When I click on the Components Icon
    Then I will navigate through the different components for the button section
    And I wanna to take screenshot "buton"

  Scenario: Test page Basic Grids
    When I click on the Grids Icon
    And I wanna to take screenshot "Grids Icon"
    Then I will navigate to the basic grids
    And I wanna to take screenshot "basic grids"
    And I should order the table by Company from A-Z
    And I wanna to take screenshot "A-Z"
    And I should order the table by Company from Z-A
    And I wanna to take screenshot "Z-A"
    And I should sort the table by Price from smallest to largest
    And I wanna to take screenshot "smallest"
    And I should order the table by Price from largest to smallest
    And I wanna to take screenshot "largest"
    And I should sort the table by Change from smallest to largest
    And I wanna to take screenshot "change_smallest"
    And I should order the table by Change from largest to smallest
    And I wanna to take screenshot "change_largest"
    And I should sort the table by Last updated from the most recent to the oldest
    And I wanna to take screenshot "date_recent"
    And I should sort the table by Last updated from the most oldest to the recent
    And I wanna to take screenshot "date_oldest"
    Given I include feature and story name
