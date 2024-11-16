/** @format */

describe("My First Test", () => {
  it("test1 - Verify Title - Positive", function () {
    //steps to perform will be included in the it block
    cy.visit("https://opensource-demo.orangehrmlive.com/auth/login");
    cy.title().should("eq", "OrangeHRM"); //this is an assertion method
  });
  it("test2 - Verify Title - Negative", () => {
    //steps to perform will be included in the it block
    cy.visit("https://opensource-demo.orangehrmlive.com/auth/login");
    cy.title().should("eq", "Google"); //this is an assertion method
  });
});

describe("test", () => {
  //arrow function
});
