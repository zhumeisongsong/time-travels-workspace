
import { describe, it, expect } from 'vitest';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
import { TaskHistoryEntity } from './task-history.entity';

describe('TaskRepository', () => {
  it('should get a random task', async () => {
    const mockTask: TaskEntity = {
      id: '123',
      name: 'Test Task',
      description: 'Test Description',
      categories: []
    };

    const repository: TaskRepository = {
      getRandomTask: async () => mockTask,
      createTaskHistory: async () => null,
      updateTaskHistory: async () => null
    };

    const result = await repository.getRandomTask();
    expect(result).toEqual(mockTask);
  });

  it('should create task history', async () => {
    const mockTaskHistory: TaskHistoryEntity = {
      id: '123',
      taskId: '456',
      userId: '789',
      createdAt: new Date('2023-01-01T00:00:00Z'),
    };

    const repository: TaskRepository = {
      getRandomTask: async () => null,
      createTaskHistory: async () => mockTaskHistory,
      updateTaskHistory: async () => null
    };

    const result = await repository.createTaskHistory({
      taskId: '456',
      userId: '789'
    });
    expect(result).toEqual(mockTaskHistory);
  });

  it('should update task history', async () => {
    const mockTaskHistory: TaskHistoryEntity = {
      id: '123',
      taskId: '456',
      userId: '789',
      createdAt: new Date('2023-01-01T00:00:00Z'),
      completedAt: new Date('2023-01-01T01:00:00Z')
    };

    const repository: TaskRepository = {
      getRandomTask: async () => null,
      createTaskHistory: async () => null,
      updateTaskHistory: async () => mockTaskHistory
    };

    const result = await repository.updateTaskHistory({
      taskHistoryId: '123',
      isCompleted: true
    });
    expect(result).toEqual(mockTaskHistory);
  });
});
