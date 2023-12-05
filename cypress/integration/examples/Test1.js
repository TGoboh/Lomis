import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage'
import TenantListingPage from '../pageObjects/TenantListingPage'
import AdminDashboardPage from '../pageObjects/AdminDashboardPage'
import AdminAddUserPage from '../pageObjects/AdminAddUserPage'

describe("Lomis Admin Login", function()
{

it("Lomis Admin Functionalities", function(){
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const tenantListingPage = new TenantListingPage
    const adminDashboardPage = new AdminDashboardPage
    const adminAddUserPage = new AdminAddUserPage

    // Admin Login
    homePage.navigate();
    homePage.clickSignInButton();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickSubmitButton();
    tenantListingPage.clickAdministrationButton();

    adminDashboardPage.clickUsersButton();
    adminAddUserPage.clickAddUserButton();
    adminAddUserPage.enterName();
    adminAddUserPage.enterPassword();
    adminAddUserPage.enterPasswordConfirmation();
    



    /*User Creation
    cy.get("button[aria-controls='app-auth']").click();
    cy.get("div a[href='/admin/auth/user/']").click();
    cy.get(".addlink").click();
    cy.get(".vTextField").type("QAautomation");
    cy.get("input[name='password1']").type("Pa$$word123");
    cy.get("input[name='password2']").type("Pa$$word123");
    cy.get(".default").eq(1).click();
    cy.get(".toast-body").invoke("text").should("include", "The user “QAautomation” was added successfully");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();
    cy.get("#id_is_staff").click();
    cy.get("#id_is_superuser").click();
    cy.get("#id_first_name").type("Quality");
    cy.get("#id_last_name").type("Assurance");
    cy.get("#id_email").type("qa@ehealthnigeria.org");
    cy.get(".default").eq(1).click();
    cy.get(".toast-body").invoke("text").should("include", "The user “QAautomation” was changed successfully");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

   
    //Users filter and Search 
    cy.get(".navbar-toggler").click();
    cy.get("a[href='?is_active__exact=0']").click();
    cy.get(".warning.navbar-toggler").click();
    cy.get("a[href='?is_active__exact=1']").click();
    cy.get(".warning.navbar-toggler").click();
    cy.contains("All").click();

    //Deactivate User
    cy.get(".btn.btn-secondary.dropdown-toggle").eq(1).click();
    cy.get(".dropdown-item").eq(1).click({ force: true });
    cy.get(".toast-body").invoke("text").should("include", 'The user "QAautomation" was deactivated successfully.');
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

    //Search User 
    cy.get("input[type='text']").type("QAautomation");
    cy.get("input[type='submit']").click();

    //Turn User Active
    cy.get(".action-select").click()
    cy.get("select[name='action']").select("Toggle “active” flag for the selected users");
    cy.get(".button").click();
    cy.get('.toast-body').invoke('text').should('include', `Toggled “is_active” value for the selected users (1).`);
    cy.get(".btn-close.me-2.m-auto.bg-info").click();

    //Change Password
    cy.get(".action-select").click()
    cy.get("select[name='action']").select("Change password for the selected users");
    cy.get(".button").click();
    cy.get("input[name='password1']").type("Lomadmin##2023");
    cy.get("input[name='password2']").type("Lomadmin##2023");
    cy.get("input[type='submit']").eq(1).click();
    cy.get('.toast-body').invoke('text').should("include", "Changed password for the selected users (1)");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();

    //Delete Users
    cy.get(".action-select").click()
    cy.get("select[name='action']").select("Delete selected users");
    cy.get(".button").click();
    cy.get("input[type='submit']").click();
    cy.get('.toast-body').invoke('text').should('include', "Successfully deleted 1 user.");
    cy.get(".btn-close.me-2.m-auto.bg-success").click();*/



 








   /*cy.get(".admin-filter-active > :nth-child(3) > a").click();
    cy.get(".warning.navbar-toggler").click();
    cy.get(".admin-filter-active > :nth-child(2) > a").click()
    cy.get("#searchbar").type("QAautomation");
    cy.get("input[type='submit']").click();
    cy.get(".field-username > a").invoke('text').should("include", "QAautomation");*/

    //Admin Logout
    //cy.get('[href="/admin/logout/"]').click();
   // cy.get(".nav-link").invoke("text").should("include", "Sign In");

});
});
