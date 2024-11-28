Feature:Login
    As a User
    I can Login to the SpectraIQ homepage

    Scenario: Verify that the User can sigin using valid credentials
    Given User is navigating to  the uat.spectraiq.in page
    When I fill the login details and submit
    Then I expect to see the expectedHomepage

    
 Scenario: Giving feedback and report it    
    When I click on feedback option in expand
    And I give the feedback and report it 
    Then I will see the report in the feedback page
   

   Scenario: Choosing the file for doing template
   When I click on the data option in expand
   And select the file format and choose the file
   Then I will see the data from the choosen file