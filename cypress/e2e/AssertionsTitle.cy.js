/** @format */

describe("Assertions Tutorial", () => {
  it("Title Assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //You can use title method to compare the title of the URL by using should method
    cy.title()
      .should("include", "OrangeHRM")
      .and("eq", "OrangeHRM")
      .and("not.contain", "orangee"); //Negative scenario

    // checking the presence of an image using should & be visisble keyword
    cy.get(".orangehrm-login-branding > img").should("be.visible");

    // checking the presence of an image using should & exist keyword
    cy.get(".orangehrm-login-branding > img").should("exist");

    // The above code can be further optimized
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");

    //provide a value in the input box
    cy.get("input[placeholder='Username']").type("Admin");

    //Check if the value is filled in the correct field
    cy.get("input[placeholder='Username']")
      .should("have.value", "Admin")

      //Optimizing the above code
      .should("have.value", "Admin");

    cy.get("input[placeholder='Password']").type("admin123");

    cy.get("button[type='submit']").click();
  });
});
