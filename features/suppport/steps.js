const {Given,When,Then,Before,After}= require ("@cucumber/cucumber");
const {setDefaultTimeout}=require('@cucumber/cucumber');
 setDefaultTimeout(50 * 1000);

Before(async function(){
    //console.log("before");
    
     await this.launchBrowser();
});

After(async function(){
     await this.closeBrowser();
});

Given("User is navigating to  the uat.spectraiq.in page", async function() {
    console.log("visited");
    
     await this.visit();
});

When("I fill the login details and submit", async function() {
    await this.fillCredentialsAndSubs();

});

Then("I expect to see the expectedHomepage", async function () {
     await this.expectedHomePage();
});





//const {Given,When,Then,Before,After}= require ("@cucumber/cucumber");
//const {setDefaultTimeout}=require('@cucumber/cucumber');
 //setDefaultTimeout(50 * 1000);



/*Given("User is navigating to the uat.spectraiq.in", async function() {
     await this.login();
});*/

When("I click on feedback option in expand", async function () {
     await this.feedback();
})     

When("I give the feedback and report it", async function () {
     await this.fillcategoryandissue();
 
 });
 
 Then("I will see the report in the feedback page", async function () {
      await this.feedbackpage();
      
 });
 
 //3 Scenerio

 When("I click on the data option in expand", async function () {
     await this.data();
   
})     

When("select the file format and choose the file", async function () {
     await this.choosefile();
 
 });
 
 Then("I will see the data from the choosen file", async function () {
      await this.datapage();
      
 });
 