import { Given, When, Then } from "@wdio/cucumber-framework";

import ComponentsPage from "../pageobjects/componentsSection.page";
import GridPage from "../pageobjects/gridSection.page";
import allureReporter from "@wdio/allure-reporter";

Given("I want visit {string} page", async (page) => {
  await ComponentsPage.open(page);
});

Given("I wanna to take screenshot {string}", async (param) => {
  await ComponentsPage.takeScreenShot(param);
});

When("I click on the Components Icon", async () => {
  await ComponentsPage.goToFrame();
  await ComponentsPage.clickOnComponents();
  await ComponentsPage.clickOnButtons();
});

Then(
  "I will navigate through the different components for the button section",
  async () => {
    await ComponentsPage.clickOnBasicButtons();
    await ComponentsPage.clickOnDisableOrEnable();
    await ComponentsPage.validateClickDisable();
    await ComponentsPage.clickOnDisableOrEnable();
    await ComponentsPage.clickOnButtonsMenu();
    await ComponentsPage.clickOnToogleButtons();
    await ComponentsPage.clickEnableOrDisable();
    await ComponentsPage.clickEnableOrDisable();
    await ComponentsPage.clickOnButtonsMenu();
    await ComponentsPage.clickOnMenuButtons();
    await ComponentsPage.clickEnableOrDisable();
    await ComponentsPage.clickEnableOrDisable();
    await ComponentsPage.clickOnMenuOption();
    await ComponentsPage.clickOnButtonsMenu();
    await ComponentsPage.gotBackToExample();
    await ComponentsPage.goToHome();
  }
);

When("I click on the Grids Icon", async () => {
  await GridPage.goToGridSection();
});

Then("I will navigate to the basic grids", async () => {
  await GridPage.goToFirstOption();
  await GridPage.goToFirstOption();
});

Then("I should order the table by Company from A-Z", async () => {
  await GridPage.orderByCompany();
});

Then("I should order the table by Company from Z-A", async () => {
  await GridPage.orderByCompany();
});

Then("I should sort the table by Price from smallest to largest", async () => {
  await GridPage.orderByPrice();
});

Then("I should order the table by Price from largest to smallest", async () => {
  await GridPage.orderByPrice();
});

Then("I should sort the table by Change from smallest to largest", async () => {
  await GridPage.orderByChange();
});

Then(
  "I should order the table by Change from largest to smallest",
  async () => {
    await GridPage.orderByChange();
  }
);

Then(
  "I should sort the table by Last updated from the most recent to the oldest",
  async () => {
    await GridPage.orderByDate();
  }
);

Then(
  "I should sort the table by Last updated from the most oldest to the recent",
  async () => {
    await GridPage.orderByDate();
  }
);

Given("I include feature and story name", () => {
  allureReporter.addFeature("Feature_name");
  allureReporter.addStory("Story_name");
});
