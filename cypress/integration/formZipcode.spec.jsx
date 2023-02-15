/// <reference types="cypress" />

context('Zipcode', () => {
    before(() => {
        cy.visit('http://localhost:3001/form-cep')
    })
    it('shold return zipcode', () => {
        addressRequest()
        cy.get('[data-testid="zipcode"]').type('11850000')
        cy.wait('@resAddress')
        cy.get('[data-testid="neighborhood"]').should('have.value', 'Jardim Francisca')
        cy.get('[data-testid="publicplace"]').should('have.value', 'Rua João Nagliatti')
    })
})

const addressRequest = () => {
    cy.server()
    cy.route({
        method: 'GET',
        url: `https://viacep.com.br/ws/11850000/json`,
        response: 'fixture:address.json'
    }).as('resAddress')
}