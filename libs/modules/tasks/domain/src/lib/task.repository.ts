import { TaskHistoryEntity } from './task-history.entity';
import { TaskEntity } from './task.entity';

export interface TaskRepository {
  getRandomTask(): Promise<TaskEntity | null>;
  createTaskHistory(createTaskDto: {
    taskId: string;
    userId: string;
  }): Promise<TaskHistoryEntity | null>;
  updateTaskHistory(updateTaskDto: {
    taskHistoryId: string;
    isCompleted: string;
  }): Promise<TaskHistoryEntity | null>;
}
