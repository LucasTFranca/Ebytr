describe('TaskList', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Testa se a pagina renderiza o component TaskInput', () => {
    cy.get('#taskCreateInput').should('exist');
    cy.get('#sortSelect').should('exist');
    cy.get('#addTaskButton').should('exist');
  });

  it('testa se é possivel criar uma task', () => {
    cy.get('#taskCreateInput').clear();
    cy.get('#taskCreateInput').type('task rubinho');
    cy.get('#addTaskButton').click();
    cy.get('.taskInput').should('have.value', 'task rubinho');
    cy.get('#taskCreateInput').should('have.value', '');
  });

  it('Testa se a pagina renderiza o component TaskList', () => {
    cy.get('.taskInput').should('exist');
    cy.get('.statusSelect').should('exist');
    cy.get(':nth-child(1) > [aria-label="edit"] > [data-testid="ModeEditOutlineOutlinedIcon"] > path').should('exist');
    cy.get(':nth-child(1) > .editButton > [data-testid="DeleteIcon"] > path').should('exist');
  });

  it('Testa se é possivel atualizar o status', () => {
    cy.get(':nth-child(1) > .statusSelect').select('andamento');
    cy.reload();
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'andamento');
    cy.get(':nth-child(1) > .statusSelect').select('pronto');
    cy.reload();
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'pronto');
  });

  it('Testa se é possivel atualizar a task', () => {
    cy.get(':nth-child(1) > [aria-label="edit"] > [data-testid="ModeEditOutlineOutlinedIcon"] > path').click();
    cy.get(':nth-child(1) > .taskInput').clear();
    cy.get(':nth-child(1) > .taskInput').type('task rubinho atualizada{enter}');
    cy.get('.taskInput').should('have.value', 'task rubinho atualizada');
  });

  it('Testa se é possivel deletar a task', () => {
    cy.get(':nth-child(1) > .editButton > [data-testid="DeleteIcon"] > path').click();
    cy.get('.taskInput').should('not.exist');
  });
});

describe('TaskInput', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Testa se a pagina renderiza o component TaskInput', () => {
    cy.get('#taskCreateInput').should('exist');
    cy.get('#sortSelect').should('exist');
    cy.get('#addTaskButton').should('exist');
  });

  it('testa se é possivel criar uma task', () => {
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
    cy.get(':nth-child(1) > .taskInput').should('have.value', 'agua');
  });

  it('testa se é possivel ordena por status', () => {
    cy.get(':nth-child(1) > .statusSelect').select('andamento');
    cy.get('#sortSelect').select('status');
    cy.get(':nth-child(1) > .statusSelect').should('have.value', 'andamento');
  });

  it('testa se é possivel ordena por data de criacao', () => {
    cy.get('#sortSelect').select('criacao');
    cy.get(':nth-child(1) > .taskInput').should('have.value', 'task');
  });
});

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Testa se a pagina renderiza o component TaskInput', () => {
    cy.get('#taskCreateInput').should('exist');
    cy.get('#sortSelect').should('exist');
    cy.get('#addTaskButton').should('exist');
  });

  it('Testa se a pagina renderiza o component TaskList', () => {
    cy.get('.taskInput').should('exist');
    cy.get('.statusSelect').should('exist');
    cy.get(':nth-child(1) > [aria-label="edit"] > [data-testid="ModeEditOutlineOutlinedIcon"] > path').should('exist');
    cy.get(':nth-child(1) > .editButton > [data-testid="DeleteIcon"] > path').should('exist');
  });
});
