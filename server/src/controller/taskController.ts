import { Request, Response } from 'express';
import TaskService from '../services/tasksService';

// const ERROR_500 = 'Internal Server Error';

class taskController {
  constructor(private taskService = new TaskService()) {}

  public getAllTask = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await this.taskService.getAllTask();
    return res.status(200).json(tasks);
  };
}

export default taskController;
