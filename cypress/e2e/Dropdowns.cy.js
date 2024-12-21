describe("Dropdown interaction", ()=>{
it.skip('Dropdown', () => {  // The skip attribute helps in skipping the block for the next execution phase.
    
cy.visit("https://www.zoho.com/commerce/free-demo.html");

cy.get("#zcf_address_country"). //locating the element
select("Hong Kong"). //selecting the value
should('have.value','Hong Kong') //verifying the value

})
//This block of code is used to select the value from the dropdown using the select method.
// The below code enters  the value to be selected & verifies the selected value.

it.skip("dropdown without select, using click", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application");
    cy.get("#select2-billing_country-container").click();

    cy.get("input[role='combobox']").type("Japan").type("{enter}");
    
    cy.get("#select2-billing_country-container").
    should('have.text','Japan'); //validating the selected value in the dropdown
    // have.value assertion cannot be used to compare value because we are filling in text format  

}) 
it.skip ( 'Handing auto suggested dropdown', () => {

    // navigating to the wikipedia page
    cy.visit("https://www.wikipedia.org/");
    // Locating the search box
    cy.get("#searchInput").type("Delhi");
    // Adding text to the search box
    // suggestions are displayed
    cy.get(".suggestion-link").contains("Delhi University").click();
    // selecting the suggestion

    cy.url().should('include','Delhi_University');
    // validating the selected suggestion

})

it("Handling dynamic dropdown", () => {
    // Add your test code here
    // Navigate to the google page
    cy.visit("https://www.google.co.in/");

    // Locating the search box
    cy.get("[name='q']").type("Cypress Automation");
    // Adding text to the search box
    // suggestions are displayed

    cy.get("div.erkvQe").each(($el, index, $list) => {
        // if($el.text() === "Cypress Automation - Google Search"){
        //     $el.click();
        // }


        cy.wrap($el).click();
        // Add any additional actions you want to perform on each suggestion
        // For example, you can validate the suggestion text
        cy.wrap($el).should('contain.text', 'Cypress Automation');
        // Navigate back to the search results page if needed
        cy.go('back');
        // This has to be taken care after completing the course
    });
    // validating the selected suggestion



})

})