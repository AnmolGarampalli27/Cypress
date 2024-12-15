/// < reference types="Cypress" />


describe("Check UI elements", ()=>{
    it("Checking Radio Buttons",()=>{

cy.visit ("https://qa-automation-practice.netlify.app/radiobuttons")
cy.get("label[for='radio-button2']").should('be.present');

it('Checkbox interaction', () => {

    cy.visit ("https://formstone.it/components/checkbox/")
cy.get("div[class='fs-checkbox fs-light fs-checkbox-checked'] div[class='fs-checkbox-flag']").check();    

});


// This module is still pending to be completed
//Moving further to next module

    })
}  
)