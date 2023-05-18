import * as express from 'express';
import TasksController from '../controller/taskController';

const tasksRouter = express.Router();
const tasksController = new TasksController();

tasksRouter.get('/tasks', tasksController.getAllTask);
tasksRouter.post('/tasks', tasksController.createTask);

export default tasksRouter;
