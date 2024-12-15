/** @format */

describe("Assertions Demo", () => {
  //describe clock

  it("Implicit Assertions", () => {
    //it block

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // should and are the implicit assertion keywords

    //include is a keyword used in implicit assertion

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //eq is a keyword to check equality of the entire text with the returned text

    cy.url().should("contain", "orange");
    //This keyword works very similar to include keyword

    // Using single statement and comparing multiple times using should keyword

    // cy.url().should('include','auth/login')

    //          .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //         .should('contain','orange');

    // Using single statement and comparing multiple times using and keyword

    cy.url()
      .should("include", "auth/login")

      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )

      .and("contain", "orange");
  });
});
