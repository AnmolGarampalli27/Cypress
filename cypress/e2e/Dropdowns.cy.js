describe("Dropdown interaction", ()=>{
it.skip('Dropdown', () => {  // The skip attribute helps in skipping the block for the next execution phase.
    
cy.visit("https://www.zoho.com/commerce/free-demo.html");

cy.get("#zcf_address_country"). //locating the element
select("Hong Kong"). //selecting the value
should('have.value','Hong Kong') //verifying the value

})
it("dropdown without select, using click", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application");
    cy.get("#select2-billing_country-container").click();

    cy.get("input[role='combobox']").type("Italy").type("{enter}");
    
    cy.get("#select2-billing_country-container").
    should('have.text','Italy'); //validating the selected value in the dropdown
    // have.value assertion cannot be used to compare value because we are filling in text format  

})   
})