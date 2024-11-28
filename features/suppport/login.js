const {setWorldConstructor}=require("@cucumber/cucumber");
const puppeteer=require("puppeteer");



class CreateUserAccount {

    async launchBrowser(){
        console.log("launch");
        
        this.browser=await puppeteer.launch({
            headless:true,
    
        });
        this.page=await this.browser.newPage();
        
    
    }
    
    async closeBrowser(){
        await this.browser.close();
    }
    

    async visit () {
        await this.page.goto("http://uat.spectraiq.in/");
        await this.page.waitForSelector("#UserID");
    }
    
    async fillCredentialsAndSubs() {
        await this.page.type("#UserID","sreeparthiban1@analyticbrains.com");
        await this.page.type("#password","Test@123");
        
    }

    async expectedHomePage () {
        await this.page.waitForSelector(".row");
    }



//const {AddnewUser}=require("@cucumber/cucumber");
//const puppeteer=require("puppeteer");


// class AddnewUser {
    
    

    /*async login() {
        await this.page.goto("http://uat.spectraiq.in/home");
        await this.page.waitForSelector(".MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation4 tss-58la38-MUIDataTable-paper tss-1bk4gez-MUIDataTable-root hide-table-wrapper css-ao8rxk");
    }*/
    async feedback() {
         await this.page.waitForSelector('img[name="Feedback"]',{ visible: true});
        console.log("print");
        await this.page.click('img[name="Feedback"]',{ visible: true});
        
    }

    async fillcategoryandissue() {
        await this.page.type("#Category");
        await this.page.type("#TempDescription");
        await this.page.click(".MuiTouchRipple-root css-w0pj6f");
       
    }

    async feedbackpage() {
        await this.page.waitForSelector(".tss-131sses-MUIDataTable-responsiveScroll");
    }

//setWorldConstructor(AddnewUser);



 
//3 Scenerio
async data() {
    
    await this.page.click(".NavBar-active",{ visible: true});
    await this.page.waitForSelector("#Uploaded File Data",{ visible: true});
}

async choosefile() {
    await this.page.click("#Uploaded File Data");
    await this.page.type("#uploadFile");
    
}

async datapage() {
   await this.page.waitForSelector("#mui-p-9033-T-1");
}
}

setWorldConstructor (CreateUserAccount);