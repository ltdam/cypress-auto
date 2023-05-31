export class LoginPage {
    verifyHomeScreen() {
        cy.logVerify('Verify Sign-In button is displayed')
        cy.get('[href="/login"]')
            .contains('Sign in')
            .as('signInBtn')
            .should('be.visible')

        cy.logVerify('Verify Search Github field is displayed')
        cy.get('input[placeholder="Search GitHub"]').should('be.visible')

        cy.logVerify('Verify 4 menu headers are displayed')
        cy.get('.header-menu-wrapper .HeaderMenu-item').should('have.length', 4)
        return this
    }

    loginByCredentials(email, password) {
        cy.logStep('Click Sign In')
        cy.get('@signInBtn').click()

        cy.logStep(`Type: ${email} and ${password}`)
        cy.get('[name="login"]').type(email)
        cy.get('[name="password"]').type(password)

        cy.logStep('Click SUBMIT')
        cy.get('[name="commit"]').click()
        return this
    }

    verifyLoginFailsWithError(msg) {
        cy.logVerify('Verify login fails')
        cy.get('[role="alert"]').contains(msg).should('be.visible')

        cy.logVerify('Verify URL includes /session')
        cy.url().should('include', '/session')
        return this
    }
}
