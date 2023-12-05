class HomePage
{
    navigate(){
        cy.visit("https://lomis-suite-dev.eha.im/");
    }

    clickSignInButton(){
       return cy.get("#log-in-link").click();
    }
}

export default HomePage
