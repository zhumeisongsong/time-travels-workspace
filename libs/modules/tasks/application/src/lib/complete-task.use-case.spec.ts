import { describe, it, expect, vi } from 'vitest';
import { CompleteTaskUseCase } from './complete-task.use-case';
import { TaskRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';

describe('CompleteTaskUseCase', () => {
  const mockTasksRepository: TaskRepository = {
    updateTaskHistory: vi.fn(),
    getTaskHistory: vi.fn(),
    getRandomTask: vi.fn(),
    createTaskHistory: vi.fn()
  };

  const mockTasksService: TasksService = {
    setTask: vi.fn(),
    completeTask: vi.fn()
  };

  const completeTaskUseCase = new CompleteTaskUseCase(
    mockTasksRepository,
    mockTasksService
  );

  it('should update task history and set task when task history exists', async () => {
    const mockTaskHistory = {
      id: '123',
      taskId: '456',
      userId: '789',
      isCompleted: true,
      createdAt: new Date().toISOString()
    };

    vi.mocked(mockTasksRepository.updateTaskHistory).mockResolvedValue(mockTaskHistory);

    await completeTaskUseCase.execute('123');

    expect(mockTasksRepository.updateTaskHistory).toHaveBeenCalledWith({
      isCompleted: true,
      taskHistoryId: '123'
    });
    expect(mockTasksService.setTask).toHaveBeenCalledWith(mockTaskHistory);
  });
});
