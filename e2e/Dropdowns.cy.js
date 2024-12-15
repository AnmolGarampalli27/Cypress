describe("Dropdown interaction", ()=>{
it('Dropdown', () => {
    
cy.visit("https://www.zoho.com/commerce/free-demo.html");

cy.get("#zcf_address_country"). //locating the element
select("Hong Kong"). //selecting the value
should('have.value','Hong Kong') //verifying the value





});    




}




)