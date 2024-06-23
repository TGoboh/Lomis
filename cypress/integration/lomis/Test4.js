describe("User Login", function()
{

it("User carry out outbound and inbound", function(){
    
    cy.visit("https://lomis-suite-dev.eha.im/");
    cy.get("a[href='/tenant/wfp/']").eq(0).click({force: true});
    cy.get(".btn.btn-primary.p-3").click();
    cy.get("#id_username").type("thankgod.oboh");
    cy.get("#id_password").type("Password");
    cy.get("#submit-id-submit").click();
    cy.contains("Dashboard Stock").click({force: true});
    cy.contains("Facilities").click();
    cy.contains("filter_alt").click();
    cy.get("#dates").click();
    cy.contains("7").click({force: true});
    cy.get(".rs-btn.rs-btn-primary.rs-btn-sm").click();
    cy.contains("Apply").click()
    cy.wait(10000);
    cy.contains("NCDC Coronavirus").click({force: true});
    cy.contains("add").click({force: true});
    cy.contains("Outbound").click({force: true});
    cy.wait(10000);
    cy.get(".rs-picker-toggle-caret.rs-icon").eq(0).click();
    cy.contains("110g Soap ").click();
    











}) 
}) 
