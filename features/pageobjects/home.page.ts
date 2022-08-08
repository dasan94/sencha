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
  }

  public async clickOnComponents() {
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
  }

  public async clickOnButtons() {
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
  }

  public async clickOnBasicButtons() {
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
  }

  public async clickOnDisable() {
    await $('//*[@id="checkbox-1054-inputEl"]').click();
    await browser.pause(1000);
  }

  public async validateClickDisable() {
    await $('//*[@id="button-1057"]').click();
    await browser.pause(1000);
  }

  public async clickOnEnable() {
    await $('//*[@id="checkbox-1054-inputEl"]').click();
    await browser.pause(1000);
  }

  public async clickOnButtonsMenu() {
    await $('//*[@id="treeview-1030-record-11"]/tbody/tr/td').click();
    await browser.pause(1000);
  }

  public async clickOnToogleButtons() {
    await $('//*[@id="thumbnails-1040"]/div[2]').click();
    await browser.pause(1000);
  }

  public async clickOnToogleDisable() {
    await $(
      "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input"
    ).click();
    await browser.pause(1000);
  }

  public async clickOnToogleEnable() {
    await $(
      "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input"
    ).click();
    await browser.pause(1000);
  }

  public async clickOnMenuButtons() {
    await $('//*[@id="thumbnails-1040"]/div[3]').click();
    await browser.pause(1000);
  }

  public async clickOnMenuDisable() {
    await $(
      "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input"
    ).click();
    await browser.pause(1000);
  }

  public async clickOnMenuEnable() {
    await $(
      "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input"
    ).click();
    await browser.pause(1000);
  }

  public async clickOnMenuOption() {
    await $(
      "/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[2]/table/tbody/tr[1]/td[2]/a"
    ).click();
    await browser.pause(1500);
  }

  public async gotBackToExample() {
    await $("/html/body/div[6]/div[2]/div/div/div[2]").click();
    await browser.pause(1000);
  }

  public async goToHome() {
    await $("/html/body/div[2]/div[2]/div[1]/div/div/a").click();
    await browser.pause(1500);
  }
}

export default new HomePage();
