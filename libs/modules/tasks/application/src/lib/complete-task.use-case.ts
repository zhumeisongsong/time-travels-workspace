import { TaskHistoryEntity, TaskRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';

export class CompleteTaskUseCase {
  private tasksRepository: TaskRepository;
  private tasksService: TasksService;

  constructor(tasksRepository: TaskRepository, tasksService: TasksService) {
    this.tasksRepository = tasksRepository;
    this.tasksService = tasksService;
  }

  async execute(taskHistoryId: string): Promise<void> {
    const taskHistory: TaskHistoryEntity | null =
      await this.tasksRepository.updateTaskHistory({
        isCompleted: true,
        taskHistoryId,
      });

    if (taskHistory) {
      this.tasksService.setTask(taskHistory);
    }
  }
}
