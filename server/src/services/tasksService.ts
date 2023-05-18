import TaskModel from '../database/models/TaskModel';
import { ITask } from '../interface/ITask';

class TaskService {
  public model = TaskModel;

  public getAllTask = async (): Promise<ITask[]> => {
    const tasks = await this.model.findAll({ raw: true });
    return tasks as ITask[];
  };

  public createTask = async (titulo: string, concluida: boolean): Promise<ITask> => {
    const task = await this.model.create({ titulo, concluida });
    return task as ITask;
  };

  public updateTask = async (id: number, titulo: string, concluida: boolean): Promise<void> => {
    const verifyTask = await this.model.findByPk(id);
    if (!verifyTask) throw new Error('Task not found');
    await this.model.update({ titulo, concluida }, { where: { id } });
  };
}

export default TaskService;
