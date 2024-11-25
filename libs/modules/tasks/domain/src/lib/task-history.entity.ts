import { UserEntity } from '@users/domain';

import { TaskEntity } from './task.entity';

export type TaskHistoryEntity = {
  id: string;
  taskId: string;
  task?: TaskEntity;
  userId: string;
  user?: UserEntity;
  createdAt: string;
  completedAt?: string;
};
