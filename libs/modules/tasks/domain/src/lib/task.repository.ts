import { TaskHistoryEntity } from './task-history.entity';
import { TaskEntity } from './task.entity';

interface CreateTaskHistoryDto {
  taskId: string;
  userId: string;
}

interface UpdateTaskHistoryDto {
  taskHistoryId: string;
  isCompleted: boolean;
}

interface TaskHistoryFilter {
  id?: string;
  date?: string;
  userId?: string;
}

export interface TaskRepository {
  getRandomTask(): Promise<TaskEntity | null>;
  getTaskHistory(filter: TaskHistoryFilter): Promise<TaskHistoryEntity | null>;
  createTaskHistory(
    createTaskDto: CreateTaskHistoryDto,
  ): Promise<TaskHistoryEntity | null>;
  updateTaskHistory(
    updateTaskDto: UpdateTaskHistoryDto,
  ): Promise<TaskHistoryEntity | null>;
}
