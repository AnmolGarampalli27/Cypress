/** @format */

describe("Assertions Demo", () => {
  //describe clock

  it("Implicit Assertions", () => {
    //it block

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // should and are the implicit assertion keywords

    cy.url().should("not.contain", "orangee");
  });
});
