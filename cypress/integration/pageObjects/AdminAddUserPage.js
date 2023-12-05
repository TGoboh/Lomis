class AdminAddUserPage 
{
  clickAddUserButton ()
  {
   return cy.get(".addlink").click();
  }

  enterName()
  {
   return cy.get(".vTextField").type("QAautomation");
  }

  enterPassword ()
  {
   return cy.get("input[name='password1']").type("Pa$$word123");
  }

  enterPasswordConfirmation ()
  {
   return cy.get("input[name='password2']").type("Pa$$word123");
  }

  clickSaveButton()
  {
    

  }



  

}
export default AdminAddUserPage