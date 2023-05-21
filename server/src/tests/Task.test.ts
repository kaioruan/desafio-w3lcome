import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Task from '../database/models/TaskModel';
import {TasksMock} from './mock';
import { ITask } from '../interface/ITask';

chai.use(chaiHttp);
const { expect } = chai;

describe('Task', () => {
  describe('GET /tasks', () => {
    before(() => {
      sinon.stub(Task, 'findAll').resolves(TasksMock as any);
    });
    after(() => {
      (Task.findAll as sinon.SinonStub).restore();
    });
    it('should return an array of tasks', async () => {
      const response = await chai.request(app).get('/tasks');
      expect(response.status).to.be.eql(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.eql(TasksMock);
    });
  });
  describe('POST /tasks', () => {
    before(() => {
      sinon.stub(Task, 'create').resolves(TasksMock[0] as any);
    });
    after(() => {
      (Task.create as sinon.SinonStub).restore();
    });
    it('should create a new task', async () => {
      const response = await chai.request(app).post('/tasks').send(TasksMock[0]);
      expect(response.status).to.be.eql(201);
      expect(response.body).to.be.eql(TasksMock[0]);
    });
  });
  describe('PATCH /tasks/:id', () => {
    before(() => {
      sinon.stub(Task, 'findByPk').resolves(TasksMock[0] as any);
      sinon.stub(Task, 'update').resolves([1] as any);
    });
    after(() => {
      (Task.findByPk as sinon.SinonStub).restore();
      (Task.update as sinon.SinonStub).restore();
    });
    it('should update a task', async () => {
      const response = await chai.request(app).patch('/tasks/1').send(TasksMock[0]);
      expect(response.status).to.be.eql(200);
    });
  });
  describe('DELETE /tasks/:id', () => {
    before(() => {
      sinon.stub(Task, 'findByPk').resolves(TasksMock[0] as any);
      sinon.stub(Task, 'destroy').resolves({} as any);
    });
    after(() => {
      (Task.findByPk as sinon.SinonStub).restore();
      (Task.destroy as sinon.SinonStub).restore();
    });
    it('should delete a task', async () => {
      const response = await chai.request(app).delete('/tasks/1');
      expect(response.status).to.be.eql(200);
    });
  });
});

