class LoginPage
{
    enterUsername(){
       return cy.get("#id_username").type("test-qa");
    }

    enterPassword(){
       return cy.get("input[name='password']").type("rbTB7%GLuZ8RG@");
    }

    clickSubmitButton(){
       return cy.get("#submit-id-submit").click();
    }
}

export default LoginPage
