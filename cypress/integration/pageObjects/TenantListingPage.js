class TenantListingPage
{
 clickAdministrationButton (){
   return cy.get("a[href='/admin/']").click();
 }

}
export default TenantListingPage

