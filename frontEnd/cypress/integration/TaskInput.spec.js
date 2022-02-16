describe('TaskInput testing', () => {
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
    cy.get('#taskCreateInput').type('agua');
    cy.get('#addTaskButton').click();
    cy.get('.taskInput').should('have.value', 'task');
    cy.get('.taskInput').should('have.value', 'agua');
    cy.get('#taskCreateInput').should('have.value', '');
  });

  it('testa se a lista esta em ordem alfabetica', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .taskInput').should('have.value', 'agua');
  });

  it('testa se é possivel ordena por status', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .statusSelect').select('andamento');
    cy.get('#sortSelect').select('status');
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'andamento');
  });

  it('testa se é possivel ordena por data de criacao', () => {
    cy.visit('/');
    cy.get('#sortSelect').select('criacao');
    cy.get(':nth-child(1) > .taskInput').should('have.value', 'task');
  });
});
