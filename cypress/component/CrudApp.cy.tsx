import React from 'react'
import CrudApp from '../../src/CrudApp'
import { mount } from 'cypress/react18'

describe('<CrudApp />', () => {
/*   beforeEach(()=>{
    cy.visit("http://localhost:5173/");
  }); */
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CrudApp />)
    cy.get(".nombre").click();
  })
})