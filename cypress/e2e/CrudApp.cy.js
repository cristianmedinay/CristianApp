import CrudApp from '../../src/CrudApp'
/// <reference types="cypress" />

describe('CrudApp', () => {
    /* beforeEach(()=>{
        cy.visit("http://localhost:55333/");
    }) */
    /* cy.visit('https://example.cypress.io') */
/* 
    it('Does not do much!', () => {
        expect(true).to.equal(true)
      }) */

   
        it('finds the content "type"', () => {
          cy.visit('https://pokedexpokemon.netlify.app')
      
          cy.contains('type')
        })
     
})