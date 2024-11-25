import { TaskHistoryEntity } from './task-history.entity';
import { TaskEntity } from './task.entity';
import { UserEntity } from '@users/domain';

describe('TaskHistoryEntity', () => {
  it('should create a task history entity with required fields', () => {
    const taskHistory: TaskHistoryEntity = {
      id: '123',
      taskId: '456',
      userId: '789',
      createdAt: new Date('2023-01-01T00:00:00Z'),
      completedAt: new Date('2023-01-01T01:00:00Z'),
    };

    expect(taskHistory.id).toBe('123');
    expect(taskHistory.taskId).toBe('456');
    expect(taskHistory.userId).toBe('789');
    expect(taskHistory.createdAt).toBe('2023-01-01T00:00:000Z');
    expect(taskHistory.completedAt).toBe('2023-01-01T01:00:000Z');
  });

  it('should create a task history entity with optional relations', () => {
    const task: TaskEntity = {
      id: '456',
      name: 'Test Task',
      description: 'Test Description',
      categories: [],
    };

    const user: UserEntity = {
      id: '789',
      name: 'test@example.com',
    };

    const taskHistory: TaskHistoryEntity = {
      id: '123',
      taskId: '456',
      task,
      userId: '789',
      user,
      createdAt: new Date('2023-01-01T00:00:00Z'),
      completedAt: new Date('2023-01-01T01:00:00Z'),
    };

    expect(taskHistory.task).toBeDefined();
    expect(taskHistory.task?.id).toBe('456');
    expect(taskHistory.user).toBeDefined();
    expect(taskHistory.user?.id).toBe('789');
  });
});
