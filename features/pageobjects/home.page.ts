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

    //Engreso home click boton Buttos
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
    //#########################  Basic Buttons 
//despues de dar click en Buttos redirige a typos de botones click Basick buttons
   await $('//*[@id="thumbnails-1040"]/div[1]').click();
        await browser.pause(1000);

  // redirige a options
    await $('//*[@id="thumbnails-1040"]/div[1]').click();
    await browser.pause(1000);
//click disable
    await $('//*[@id="checkbox-1054-inputEl"]').click();
    await browser.pause(1000);
//Validacion disable
    await $('//*[@id="button-1057"]').click();
    await browser.pause(1000);
//selecciona para habilitar 
    await $('//*[@id="checkbox-1054-inputEl"]').click();
    await browser.pause(1000);
   
// click volver buttons
  await $('//*[@id="treeview-1030-record-11"]/tbody/tr/td').click();
  await browser.pause(1000);
 
  //################## Toogle Buttons #######################
// Click Toggle Buttons
await $('//*[@id="thumbnails-1040"]/div[2]').click();
await browser.pause(1000);

//click disable
await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input').click();
await browser.pause(1000);

//selecciona para habilitar 
await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input').click();
await browser.pause(1000);
 
// click volver buttons
await $('//*[@id="treeview-1030-record-11"]/tbody/tr/td').click();
await browser.pause(1000);

  //################## Menu Buttons  #######################
// Click Toggle Buttons
await $('//*[@id="thumbnails-1040"]/div[3]').click();
await browser.pause(1000);

//click disable
await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input').click();
await browser.pause(1000);

//selecciona para habilitar 
await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div/div/span/input').click();
await browser.pause(1000);

//selecciona para lista 1
await $('/html/body/div[2]/div[2]/div[2]/div/div/div/div/div/div[2]/table/tbody/tr[1]/td[2]/a').click();
await browser.pause(1500);

// click volver buttons
await $('//*[@id="treeview-1030-record-11"]/tbody/tr/td').click();
await browser.pause(1000);


// click volver examples
await $('/html/body/div[6]/div[2]/div/div/div[2]').click();
await browser.pause(1000);

// click volver home
await $('/html/body/div[2]/div[2]/div[1]/div/div/a').click();
await browser.pause(1500);

  }

}


export default new HomePage();
