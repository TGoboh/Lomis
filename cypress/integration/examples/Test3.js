import "cypress-file-upload";
describe("Tenant Admin Login", function()
{

it("Tenant Admin Functionalities", function(){

    //Tenant Admin Login
    cy.visit("https://lomis-suite-dev.eha.im/");
    cy.get("a[href='/tenant/testqa2/']").eq(0).click();
    cy.contains("Sign in").click();
    cy.get("#id_username").type("admin");
    cy.get("#id_password").type("Password@123");
    cy.get("#submit-id-submit").click();
    cy.contains("Administration").click();
    cy.contains("Administrative levels").click();
    cy.get(".addlink").click();
    cy.get("#id_name").type("Community");
    cy.get("#id_details").type("Test Automation");
    cy.get("#id_tn_parent").select("— — — Town");
    cy.get(".default").eq(1).click();
    cy.get(".toast-body").invoke("text").should("include", "was added successfully.");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

    //Deactivate Level
    cy.get(".btn.btn-secondary.dropdown-toggle").eq(4).click();
    cy.get(".dropdown-item").eq(4).click();
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

    //Filter Level
    cy.get(".navbar-toggler").click();
    cy.get("a[href='?is_active__exact=0']").click();
    cy.get(".warning.navbar-toggler").click();
    cy.get("a[href='?is_active__exact=1']").click();
    cy.get(".warning.navbar-toggler").click();
    cy.get("li a[href='?']").click({ force: true });
    cy.get("button[data-bs-toggle='offcanvas']").click();
    cy.get(".form-control.select-filter").eq(0).select("This month");
    cy.get(".warning.navbar-toggler").click();
    cy.get(".form-control.select-filter").eq(1).select("This month");
    cy.get(".warning.navbar-toggler").click();
    cy.contains("✖ Clear all filters").click();

    //Export Level
    cy.get(".export_link").click();
    cy.get("select[name='file_format']").select("csv");
    cy.get(".default").click();

    //Import Level
    cy.reload();
    cy.get("div a[xpath='1']").click();
    cy.get(".import_link").click();
    cy.get("input[type='file']").attachFile("AdministrativeLevel.csv");
    //cy.get(".guess_format").eq(1).select("csv");
    cy.get(".default").click();
    cy.get(".default").click();
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

    //Search Level
    cy.get("input[type='text']").type("Community");
    cy.get("input[type='submit']").click();

    //Activate Level
    cy.get(".action-select").click();
    cy.get("select[name='action']").select("Toggle “active” flag for the selected administrative levels");
    cy.get(".button").click();
    cy.get(".btn-close.me-2.m-auto.bg-info").click();

    //Delete Level
    cy.get(".action-select").click();
    cy.get("select[name='action']").select("Delete selected administrative levels");
    cy.get(".button").click();
    cy.get("input[type='submit']").click();
    cy.get(".toast-body").invoke("text").should("include", "Successfully deleted 1 administrative level.");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();



    












   


    




}) 
})
