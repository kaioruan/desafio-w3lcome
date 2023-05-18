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

  public updateTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { titulo, concluida } = req.body;
    await this.taskService.updateTask(
      Number(id),
      titulo as string,
      concluida as boolean,
    );
    return res.status(200).send();
  };

  public deleteTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this.taskService.deleteTask(Number(id));
    return res.status(200).send();
  };
}

export default taskController;
