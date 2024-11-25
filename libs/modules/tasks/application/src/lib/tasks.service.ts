import { TaskHistoryEntity } from '@tasks/domain';

export interface TasksService {
  setTask: (taskHistory: TaskHistoryEntity) => void;
  completeTask: (taskId: string) => void;
}
