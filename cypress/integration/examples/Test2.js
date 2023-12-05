import "cypress-file-upload";
describe("Lomis Admin Create Tenant", function()
{
   it("Create Tenant", function(){

    //Admin Login
    cy.visit("https://lomis-suite-dev.eha.im/");
    cy.get("#log-in-link").click();
    cy.get("#id_username").type("test-qa");
    cy.get("input[name='password']").type("rbTB7%GLuZ8RG@");
    cy.get("#submit-id-submit").click();
    cy.get("a[href='/admin/']").click();

    //Create Tenant
    cy.get("div a[href='/admin/tenants/tenant/']").click();
    cy.get(".addlink").click();
    cy.get("input[type='text']").eq(0).type("QA Automation Tenant");
    cy.get(".vLargeTextField").type("Automation Testing");
    cy.get("#id_logo_file").attachFile("QAAutomation.png");
    cy.get("input[type='text']").eq(1).type("AutomationTenant");
    cy.get("input[name='password1']").type("Pa$$word123");
    cy.get("input[name='password2']").type("Pa$$word123");
    cy.get(".default").eq(1).click();
    cy.get('.toast-body').invoke("text").should("include", "The tenant “QA Automation Tenant” was added successfully.");
    cy.get('.btn-close').click();

    //Filter Tenant
    cy.get(".navbar-toggler").click();
    cy.get('.admin-filter-active > :nth-child(3) > a').click();
    cy.get(".warning").invoke('click');
    cy.contains("Yes").click({ force: true });
    cy.get("button[aria-controls='offcanvas-changelist-filter']").click();
    cy.get(".form-control.select-filter").eq(0).select("This month");
    cy.get('.warning').click();
    cy.get(".form-control.select-filter").eq(1).select("This month");
    cy.get('.warning').click();
    cy.contains("✖ Clear all filters").click();

    //Deactivate Tenant
    cy.get(".btn.btn-secondary.dropdown-toggle").eq(0).click();
    cy.get(".dropdown-item").eq(1).click();
    cy.get('.toast-body').invoke('text').should('include', `The tenant "QA Automation Tenant" was deactivated successfully.`);


    //Reactivate Tenant
    cy.get('#searchbar').type("QA Automation Tenant");
    cy.get("input[type='submit']").click();
    cy.get(".action-select").click();
    cy.get("select[name='action']").select("Toggle “active” flag for the selected tenants");
    cy.get("button[class='button']").click();
    cy.get(".toast-body").invoke("text").should("include", "Toggled “is_active”")
    cy.get(".btn-close.me-2.m-auto.bg-info").click();

    //Remove Logo
    cy.get(".action-select").click();
    cy.get("select[name='action']").select("Remove logo image for the selected tenants");
    cy.get("button[class='button']").click();
    cy.get(".toast-body").invoke("text").should("include", "Removed logo image for the selected tenants")
    cy.get(".btn-close.me-2.m-auto.bg-info").click();

    //Delete Tenant
    cy.get(".action-select").click();
    cy.get("select[name='action']").select("Delete selected tenants");
    cy.get("button[class='button']").click();
    cy.get(".button.cancel-link").click();
    cy.get("button[class='button']").click();
    cy.get("input[type='submit']").click();
    cy.get(".toast-body").invoke("text").should("include", "Successfully deleted 1 tenant.");
   }) 
})
