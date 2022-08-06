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
  //await HomePage.clickOnComponent();
});
Then("I should see the differents {string}", async (components) => {
  await HomePage.takeScreenShot();
});
