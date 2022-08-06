import Page from "./page";

class HomePage extends Page {
  public get kitchenSlinkhome() {
    return $("#ext-element-1746");
  }

  public get content() {
    return $("#ext-element-1");
  }

  public get componentSelector() {
    return $('//*[@id="thumbnails-1039"]/div[2]');
  }

  public openHome() {
    return super.open("kitchensink");
  }

  public async takeScreenShot() {
    await this.content.saveScreenshot("captures/screenShot.png");
  }

  public async goToFrame() {
    await browser.pause(5000);
    await browser.switchToFrame(1);
    console.log("## LOG ###");
    $('#ext-element-1').getHTML().then(function(textvalue) {
      console.log("#### el ####");
      console.log(textvalue)
    });  

    //Engreso home click boton Grids
   await $('//*[@id="thumbnails-1039"]/div[1]').click();
   await browser.pause(1000);
    //#########################  Basic Buttons 


// click volver home
await $('/html/body/div[2]/div[2]/div[1]/div/div/a').click();
await browser.pause(1500);

  }

}


export default new HomePage();
