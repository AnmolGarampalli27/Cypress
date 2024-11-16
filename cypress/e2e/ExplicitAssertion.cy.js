/** @format */

describe("Assertions Tutorial", () => {
  //describe clock

  it("Explicit Assertions", () => {
    //it block

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();

    let expName = "xyz";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      // BDD Assertions
      expect(actName).to.equal(expName); //positive scenario
      expect(actName).to.not.equal(expName); //negative scenario

      //   TDD Assertions
      assertCompatible.equal(actName, expName);
      assertCompatible.notEqual(actName, expName);
    });
  });
});
