import TaskModel from '../database/models/TaskModel';
import { ITask } from '../interface/ITask';

class TaskService {
  public model = TaskModel;

  public getAllTask = async (): Promise<ITask[]> => {
    const tasks = await this.model.findAll({ raw: true });
    return tasks as ITask[];
  };
}

export default TaskService;
