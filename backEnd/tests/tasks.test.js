const frisby = require('frisby');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoDbUrl = `mongodb://${process.env.HOST || 'mongodb'}:27017/ebytr`;
const baseUrl = 'http://localhost:4000';

describe('Testa o endpoint que cria uma task', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('ebytr');
  });

  beforeEach(async () => {
    await db.collection('tasks').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Sera validado que o campo "status" é obrigatorio', async () => {
    const { _json: json } = await frisby
      .post(`${baseUrl}/task`, { context: 'rubinho' })
      .expect('status', 400);

    expect(json.message).toBe('"status" is required');
  });

  it('Sera validado que o campo "context" é obrigatorio', async () => {
    const { _json: json } = await frisby
      .post(`${baseUrl}/task`, { status: 'pronto' })
      .expect('status', 400);

    expect(json.message).toBe('"context" is required');
  });

  it('Sera validado que é possivel criar uma task', async () => {
    const { _json: json } = await frisby
      .post(`${baseUrl}/task`, { context: 'rubinho ajato', status: 'pronto' })
      .expect('status', 201);

    expect(json.context).toBe('rubinho ajato');
    expect(json.status).toBe('pronto');
  });
});

describe('Testa o endpoint que deleta uma task', () => {
  let connection;
  let db;
  let id;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('ebytr');
  });

  beforeEach(async () => {
    await db.collection('tasks').deleteMany({});
    const task = {
      context: 'bob',
      status: 'pendente',
    };
    const { insertedId } = await db.collection('tasks').insertOne(task);
    id = insertedId;
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Sera validado que o "id" é obrigatorio', async () => {
    const { _json: json } = await frisby
      .delete(`${baseUrl}/task/a`)
      .expect('status', 400);

    expect(json.message).toBe('Put a valid id');
  });

  it('Sera validado que é possivel deletar uma task', async () => {
    await frisby
      .delete(`${baseUrl}/task/${id}`)
      .expect('status', 200);
  });
});

describe('Testa o endpoint que busca uma task', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('ebytr');
  });

  beforeEach(async () => {
    await db.collection('tasks').deleteMany({});
    const task = {
      context: 'schumacher',
      status: 'pendente',
    };
    await db.collection('tasks').insertOne(task);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Sera validado que é possivel buscar tasks', async () => {
    const { _json: json } = await frisby
      .get(`${baseUrl}/task`)
      .expect('status', 200);

    expect(json.length).toBe(1);
    expect(json[0].context).toBe('schumacher');
    expect(json[0].status).toBe('pendente');
  });
});

describe('Testa o endpoint que edita uma task', () => {
  let connection;
  let db;
  let id;

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('ebytr');
  });

  beforeEach(async () => {
    await db.collection('tasks').deleteMany({});
    const task = {
      context: 'Lewis Hamilton',
      status: 'pendente',
    };
    const { insertedId } = await db.collection('tasks').insertOne(task);
    id = insertedId;
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Sera validado que o "id" é obrigatorio', async () => {
    const { _json: json } = await frisby
      .put(`${baseUrl}/task/a`, { context: 'senna > hamilton', status: 'pronto' })
      .expect('status', 400);

    expect(json.message).toBe('Put a valid id');
  });

  it('Sera validado que o campo "context" ou "status" é obrigatorio', async () => {
    const { _json: json } = await frisby
      .put(`${baseUrl}/task/${id}`)
      .expect('status', 400);

    expect(json.message).toBe('"value" must contain at least one of [context, status]');
  });

  it('Sera validado que é possivel editar um task', async () => {
    const { _json: json } = await frisby
      .put(`${baseUrl}/task/${id}`, { context: 'senna > hamilton', status: 'pronto' })
      .expect('status', 200);

    expect(json.context).toBe('senna > hamilton');
    expect(json.status).toBe('pronto');
  });

  it('Sera validado que é possivel editar um task somente com "context"', async () => {
    const { _json: json } = await frisby
      .put(`${baseUrl}/task/${id}`, { context: 'senna > hamilton' })
      .expect('status', 200);

    expect(json.context).toBe('senna > hamilton');
    expect(json.status).toBe('pendente');
  });

  it('Sera validado que é possivel editar um task somente com "status"', async () => {
    const { _json: json } = await frisby
      .put(`${baseUrl}/task/${id}`, { status: 'pronto' })
      .expect('status', 200);

    expect(json.context).toBe('Lewis Hamilton');
    expect(json.status).toBe('pronto');
  });
});
