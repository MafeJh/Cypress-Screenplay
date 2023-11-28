//import { INPUT_SEARCH } from "../UI_Pages/homePage"
const homePage = require("../UI_Pages/homePage")

Cypress.Commands.add('search', (text) => { 
    cy.get(homePage.INPUT_SEARCH).type(text).type('{enter}')
    cy.location('pathname', {timeout:10000}).should('include', '/search')
})