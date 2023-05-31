/// <reference types="cypress" />

import { LoginPage } from '../support/page-objects/login.page'
const loginPage = new LoginPage()

describe('Onboarding', () => {
    let email, password
    const RANDOM_STR = String(Math.floor(Date.now() / 1000))

    beforeEach(() => {
        cy.fixture('users').then((data) => {
            email = `${data.users[0].emailPrefix}${RANDOM_STR}@test.com`
            password = data.users[0].password
        })
        cy.logStep('Visit Github landing page')
        cy.visit('/')
    })

    it('Login - Invalid credentials - Failure with Message', () => {
        cy.logVerify('Verify Login Screen')
        loginPage.verifyHomeScreen()

        cy.logStep(`Login: ${email} - ${password}`)
        loginPage.loginByCredentials(email, password)

        const errorMsg = 'Incorrect username or password.'
        cy.logVerify(`Verify login fails with error: ${errorMsg}`)
        loginPage.verifyLoginFailsWithError(errorMsg)
    })
})
