/** @format */

// const cypress = require("cypress");cls

describe("CSSLocators", () => {
  it("CSS Locators", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/auth/login");
    cy.title().should("eq", "OrangeHRM");
    cy.get("input[placeholder='username']").type("Admin");
    cy.get("input[placeholder='password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("input[placeholder='Search']").type("Leave");
  });
});
