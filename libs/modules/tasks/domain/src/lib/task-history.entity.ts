import { UserEntity } from '@users/domain';

import { TaskEntity } from './task.entity';

/**
 * Represents the history of task state changes
 * Tracks when tasks are created and completed, maintaining relationships with tasks and users
 */
export type TaskHistoryEntity = {
  /** Unique identifier for the history entry */
  id: string;
  /** Reference to the associated task */
  taskId: string;
  task?: TaskEntity;
  /** Reference to the user who performed the action */
  userId: string;
  user?: UserEntity;
  /** Timestamp of when the task was created */
  createdAt: string;
  /** Timestamp of when the task was completed */
  completedAt?: string;
};
