describe('TaskList testing', () => {
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
    cy.get('#taskCreateInput').type('task rubinho');
    cy.get('#addTaskButton').click();
    cy.get('.taskInput').should('have.value', 'task rubinho');
    cy.get('#taskCreateInput').should('have.value', '');
  });

  it('Testa se a pagina renderiza o component TaskList', () => {
    cy.visit('/');
    cy.get('.taskInput').should('exist');
    cy.get('.statusSelect').should('exist');
    cy.get('.editButton').should('exist');
    cy.get('.deleteButton').should('exist');
  });

  it('Testa se é possivel atualizar o status', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .statusSelect').select('andamento');
    cy.reload();
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'andamento');
    cy.get(':nth-child(1) > .statusSelect').select('pronto');
    cy.reload();
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'pronto');
  });

  it('Testa se é possivel atualizar a task', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .editButton').click();
    cy.get(':nth-child(1) > .taskInput').clear();
    cy.get(':nth-child(1) > .taskInput').type('task rubinho atualizada{enter}');
    cy.get('.taskInput').should('have.value', 'task rubinho atualizada');
  });

  it('Testa se é possivel deletar a task', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .deleteButton').click();
    cy.get('.taskInput').should('not.exist');
  });
});