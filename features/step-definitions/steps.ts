import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from "../pageobjects/home.page";

Given("I want visit {string} page", async (page) => {
  await HomePage.open(page);
});

Given("I wanna to take screenshot", async () => {
  await HomePage.takeScreenShot();
});

When("I click on the {string} Icon", async (component) => {
  await HomePage.goToFrame();
  await HomePage.clickOnComponents();
  await HomePage.clickOnButtons();
  await HomePage.clickOnBasicButtons();
  await HomePage.clickOnDisable();
  await HomePage.validateClickDisable();
  await HomePage.clickOnEnable();
  await HomePage.clickOnButtonsMenu();
  await HomePage.clickOnToogleButtons();
  await HomePage.clickOnToogleDisable();
  await HomePage.clickOnToogleEnable();
  await HomePage.clickOnButtonsMenu();
  await HomePage.clickOnMenuButtons();
  await HomePage.clickOnMenuDisable();
  await HomePage.clickOnMenuEnable();
  await HomePage.clickOnMenuOption();
  await HomePage.clickOnButtonsMenu();
  await HomePage.gotBackToExample();
  await HomePage.goToHome();

});
Then("I should see the differents {string}", async (components) => {
  await HomePage.takeScreenShot();
});
