/// <reference types="cypress" />

context('Shenron Invation Test', () => {
  before(() => {
    cy.visit('http://localhost:3001/dragon-ball-manager')
  })
  it('Should not invocate shenron if dont have all dragon balls', () => {
    cy.get('[data-testid="card-shenron"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'You dont have all spheres to summon shenron')
    cy.contains('[data-testid="back"]').click()
  })
})