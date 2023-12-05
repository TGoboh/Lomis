class AdminDashboardPage
{
    clickUsersButton ()
    {
       return cy.get("div a[href='/admin/auth/user/']").click();
    }

}
export default AdminDashboardPage
