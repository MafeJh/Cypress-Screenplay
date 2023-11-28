import { SIZE, ADD_BUTTON, QUANTITY } from "../UI_Pages/productPage";

Cypress.Commands.add('addProductToShoppingCart', (product) =>{
    if(product.size)
        cy.get(SIZE).select(product.size)
    if(product.quantity)
        cy.get(QUANTITY).clear().type(product.quantity)
    
    cy.get(ADD_BUTTON).click()
})