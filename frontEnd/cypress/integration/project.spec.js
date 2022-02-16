describe('TaskList', () => {
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

describe('TaskInput', () => {
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
    cy.get('.taskInput').should('have.value', 'task');
    cy.get('#taskCreateInput').type('agua');
    cy.get('#addTaskButton').click();
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

describe('Home', () => {
  it('Testa se a pagina renderiza o component TaskInput', () => {
    cy.visit('/');
    cy.get('#taskCreateInput').should('exist');
    cy.get('#sortLabel').should('exist');
    cy.get('#sortSelect').should('exist');
    cy.get('#addTaskButton').should('exist');
  });

  it('Testa se a pagina renderiza o component TaskList', () => {
    cy.visit('/');
    cy.get('.taskInput').should('exist');
    cy.get('.statusSelect').should('exist');
    cy.get('.editButton').should('exist');
    cy.get('.deleteButton').should('exist');
  });
});
