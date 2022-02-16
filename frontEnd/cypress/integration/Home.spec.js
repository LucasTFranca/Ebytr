describe('Home testing', () => {
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
    cy.get('#taskCreateInput').type('task test');
    cy.get('#addTaskButton').click();
    cy.get('.taskInput').should('have.value', 'task test');
    cy.get('#taskCreateInput').should('have.value', '');
  });

  it('Testa se a pagina renderiza o component TaskList', () => {
    cy.visit('/');
    cy.get('.taskInput').should('exist');
    cy.get('.statusSelect').should('exist');
    cy.get('.editButton').should('exist');
    cy.get('.deleteButton').should('exist');
  });
});