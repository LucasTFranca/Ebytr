describe('Testing', () => {
  it('Testa se a pagina renderiza o component TaskInput', () => {
    cy.visit('/');
    cy.get('#taskCreateInput').should('exist');
    cy.get('#sortLabel').should('exist');
    cy.get('#sortSelect').should('exist');
    cy.get('#addTaskButton').should('exist');
  });

  it('testa se é possivel criar uma task', () => {
    cy.visit('/');
    cy.get('#taskCreateInput').clear();
    cy.get('#taskCreateInput').type('task');
    cy.get('#addTaskButton').click();
    cy.get('input').should('have.value', 'task');
    cy.get('#taskCreateInput').should('have.value', '');
  });
});
