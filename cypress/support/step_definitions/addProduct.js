import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { FIRTS_PRODUCT } from "../UI_Pages/searchPages"
import { MESSAGE } from "../UI_Pages/modelProductPage";

Before(()=>{
    cy.fixture('product').as('product');
})

Given('Cesar visits teststore.automationtesting.co.uk', ()=>{
    cy.visit('/'),
    cy.search('T-Shirt'),
    cy.get(FIRTS_PRODUCT).click()
})

When('Cesar adds a product', function(){
    cy.addProductToShoppingCart(this.product);
})

Then("Cesar should see the message {string}",function(message){
    cy.get(MESSAGE).should('be.visible')
    .and('contain', message)
} )


// Duplicamos Localizadores
// Duplicamos tareas -> Duplicando interaccion o acciones
//
//Screenplay
// Narrativa (.feature)
// step definitions
// Task
// Interaction - por el momento no se requiere
// Questions -> preguntar sobre un elemento y con base a la respuesta hacer la verificación
// UI -> pAGEoBJECT - uNICA RESPONSABILIDAD MAPEAR LA INTERFAZ DE USUARIO
// 
