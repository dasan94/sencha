import Page from "./page";

class HomePage extends Page {
  public get kitchenSlinkhome() {
    return $("#ext-element-1746");
  }

  public get content() {
    return $("#ext-element-1");
  }

  public get componentSelector() {
    return $('//*[@id="thumbnails-1040"]/div[1]');
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
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(5000);

    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(5000);

    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(5000);
    await $('//*[@id="checkbox-1054-inputEl"]').click();
    await browser.pause(15000);
  }
  /*public async clickOnComponent(){
  }*/
}

export default new HomePage();
