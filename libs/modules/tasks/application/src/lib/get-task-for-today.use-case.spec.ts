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
    localStorage.clear();
  });

  it('should throw error when userId is not found', async () => {
    await expect(getTaskForTodayUseCase.execute()).rejects.toThrow('User id not found');
  });

  it('should set existing task history when found for today', async () => {
    const userId = '123';
    const mockTaskHistory = {
      id: '456',
      taskId: '789',
      userId,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };

    localStorage.setItem('userId', userId);
    vi.mocked(mockTasksRepository.getTaskHistory).mockResolvedValue(mockTaskHistory);

    await getTaskForTodayUseCase.execute();

    expect(mockTasksRepository.getTaskHistory).toHaveBeenCalledWith({
      date: expect.any(String),
      userId
    });
    expect(mockTasksService.setTask).toHaveBeenCalledWith(mockTaskHistory);
  });

  it('should create new task history when none exists for today', async () => {
    const userId = '123';
    const mockTask = {
      id: '789',
      name: 'Test Task',
      categories: []
    };
    const mockTaskHistory = {
      id: '456',
      taskId: mockTask.id,
      userId,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('userId', userId);
    vi.mocked(mockTasksRepository.getTaskHistory).mockResolvedValue(null);
    vi.mocked(mockTasksRepository.getRandomTask).mockResolvedValue(mockTask);
    vi.mocked(mockTasksRepository.createTaskHistory).mockResolvedValue(mockTaskHistory);

    await getTaskForTodayUseCase.execute();

    expect(mockTasksRepository.getRandomTask).toHaveBeenCalled();
    expect(mockTasksRepository.createTaskHistory).toHaveBeenCalledWith({
      taskId: mockTask.id,
      userId
    });
    expect(mockTasksService.setTask).toHaveBeenCalledWith(mockTaskHistory);
  });

  it('should throw error when no random task is found', async () => {
    const userId = '123';
    localStorage.setItem('userId', userId);
    vi.mocked(mockTasksRepository.getTaskHistory).mockResolvedValue(null);
    vi.mocked(mockTasksRepository.getRandomTask).mockResolvedValue(null);

    await expect(getTaskForTodayUseCase.execute()).rejects.toThrow('No task found');
  });

  it('should throw error when task history creation fails', async () => {
    const userId = '123';
    const mockTask = {
      id: '789',
      name: 'Test Task',
      categories: []
    };

    localStorage.setItem('userId', userId);
    vi.mocked(mockTasksRepository.getTaskHistory).mockResolvedValue(null);
    vi.mocked(mockTasksRepository.getRandomTask).mockResolvedValue(mockTask);
    vi.mocked(mockTasksRepository.createTaskHistory).mockResolvedValue(null);

    await expect(getTaskForTodayUseCase.execute()).rejects.toThrow('Failed to create task history');
  });
});
