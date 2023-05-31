const betaBaseUrl = 'https://zujuverse-beta.zujudigital.com'
const decorator = '-------'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// Step Loggers
Cypress.Commands.add('logStep', (s) => {
    Cypress.log({
        name: 'setSessionStorage',
        displayName: `${decorator} STEP:`,
        message: s,
    })
})

Cypress.Commands.add('logVerify', (s) => {
    Cypress.log({
        name: 'setSessionStorage',
        displayName: `${decorator} VERIFY:`,
        message: s,
    })
})

Cypress.Commands.add('logPrecondition', (s) => {
    Cypress.log({
        name: 'setSessionStorage',
        displayName: `${decorator} PRECONDITION:`,
        message: s,
    })
})

// DB Query
Cypress.Commands.add('queryDB', (queryString) => {
    const dbName = 'beta'
    const query = queryString
    console.log(query)
    cy.task('queryDatabase', { dbName, query }).then((result) => {
        console.log(result)
        expect(result.serverStatus).to.eq(2)
    })
})
