/// <reference types = "Cypress" >

describe("Check UI elements", ()=>{
    it("Checking Radio Buttons",()=>{

        cy.visit("https://demoqa.com/automation-practice-form/")

    // Visibility of radio buttons
        cy.get("label[for='gender-radio-1']").should('be.visible','gender-radio-1')
        cy.get("label[for='gender-radio-2']").should('be.visible','gender-radio-2')

   // Selecting the radio button

//    cy.get("label[for='gender-radio-1']").check().should("be.visible");


    })
}  )