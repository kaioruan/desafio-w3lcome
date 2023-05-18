import * as express from 'express';
import TasksController from '../controller/taskController';

const tasksRouter = express.Router();
const tasksController = new TasksController();

tasksRouter.get('/tasks', tasksController.getAllTask);

export default tasksRouter;
