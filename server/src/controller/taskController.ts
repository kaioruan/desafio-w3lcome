import { Request, Response } from 'express';
import TaskService from '../services/tasksService';

// const ERROR_500 = 'Internal Server Error';

class taskController {
  constructor(private taskService = new TaskService()) {}

  public getAllTask = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await this.taskService.getAllTask();
    return res.status(200).json(tasks);
  };

  public createTask = async (req: Request, res: Response): Promise<Response> => {
    const { titulo, concluida } = req.body;
    const task = await this.taskService.createTask(titulo as string, concluida as boolean);
    if (!task) return res.status(500).json({ message: 'Internal Server Error' });
    return res.status(201).json(task);
  };
}

export default taskController;
