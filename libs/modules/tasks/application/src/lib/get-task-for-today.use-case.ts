import { TaskEntity, TaskHistoryEntity, TaskRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';

export class GetTaskForTodayUseCase {
  private tasksRepository: TaskRepository;
  private tasksService: TasksService;

  constructor(tasksRepository: TaskRepository, tasksService: TasksService) {
    this.tasksRepository = tasksRepository;
    this.tasksService = tasksService;
  }

  async execute(): Promise<void> {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      // TODO: finish error handling
      throw new Error('User id not found');
    }

    const todayTaskHistory: TaskHistoryEntity | null =
      await this.tasksRepository.getTaskHistory({
        date: new Date().toISOString(),
        userId: userId,
      });

    if (todayTaskHistory) {
      this.tasksService.setTask(todayTaskHistory);
    } else {
      const task: TaskEntity | null =
        await this.tasksRepository.getRandomTask();

      if (!task) {
        // TODO: finish error handling
        throw new Error('No task found');
      }

      const taskHistory: TaskHistoryEntity | null =
        await this.tasksRepository.createTaskHistory({
          taskId: task.id,
          userId: userId,
        });

      if (!taskHistory) {
        // TODO: finish error handling
        throw new Error("Failed to create task history");
      }

      this.tasksService.setTask(taskHistory);
    }
  }
}
