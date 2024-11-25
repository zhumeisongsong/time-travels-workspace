import { describe, it, expect, vi } from 'vitest';
import { GetTaskForTodayUseCase } from './get-task-for-today.use-case';
import { TaskRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';

describe('GetTaskForTodayUseCase', () => {
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

  const getTaskForTodayUseCase = new GetTaskForTodayUseCase(
    mockTasksRepository,
    mockTasksService
  );

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('localStorage', {
      clear: vi.fn(),
      getItem: vi.fn(),
      setItem: vi.fn()
    });
  });

  it('should throw error when userId is not found', async () => {
    await expect(getTaskForTodayUseCase.execute()).rejects.toThrow('User id not found');
  });
});
