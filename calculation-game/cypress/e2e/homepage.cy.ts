/// <reference types="cypress" />

describe('Calculation game functionality', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('verifies the initial state of the application', () => {
    // Check for the initial welcome message
    cy.contains('h2', 'Welcome to the Calculation Game').should('be.visible');

    // Ensure the CalculationForm is not initially visible
    cy.get('form').should('not.exist');

    // Ensure the CalculationsHistory is not initially visible or empty
    cy.get('ul').should('not.exist');
  });

  it('starts a new calculation, submits an answer, and verifies history update', () => {
    // Click the "New Calculation" button
    cy.contains('button', 'New Calculation').click();

    // Check for the CalculationForm to ensure it's rendered
    cy.get('form').should('be.visible');

    // Check for the CalculationsHistory to ensure it's rendered
    cy.get('ul').should('be.visible');

    // Check for a generic calculation format in the CalculationDisplay component
    // This assumes that the displayed calculation follows a specific format (e.g., "number operator number = _")
    cy.get('h2')
      .invoke('text')
      .should('match', /\d+\s[+|\-|*|/]\s\d+\s=\s_/);

    // Enter an answer in the CalculationForm and submit
    cy.get('form input[type="number"]').type('2');
    cy.get('form button[type="submit"]').click();

    // Check that the CalculationsHistory updates, look for the answer you submitted
    cy.get('ul').contains('2').should('be.visible');
  });
});
