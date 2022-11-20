/// <reference types="cypress" />
describe("recherche d'un produit sur un site internet", ()=>{
    it('je recheche un produit', ()=>{
        cy.visit('https://www.google.fr/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type('zalando.fr{enter}')
        cy.get('.eKjLze > .g > [lang="fr"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
        cy.get('.z-navicat-header_searchInput').type('dunk low{enter}')
        cy.get('[data-zalon-partner-target="true"] > :nth-child(1)').click()
        
    })
})