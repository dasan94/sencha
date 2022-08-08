import Page from "./page";

class GridPage extends Page {
  public async goToGridSection() {
    await $("/html/body/div[2]/div[2]/div[2]/div/div/div/div[2]").click();
    await browser.pause(1000);
  }

  public async goToFirstOption() {
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
  }

  public async orderByCompany() {
    await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]').click();
    await browser.pause(1000);
  }
  
  public async orderByPrice() {
    await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div[2]/div[1]/div/div/div[2]').click();
    await browser.pause(1000);
  }

  public async orderByChange() {
    await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div[2]/div[1]/div/div/div[3]').click();
    await browser.pause(1000);
  }

  public async orderByDate() {
    await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div[2]/div[1]/div/div/div[5]').click();
    await browser.pause(1000);
  }
}

export default new GridPage();
