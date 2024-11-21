import { describe, it, expect } from 'vitest';
import { UsersRepository, UserEntity } from './users.repository';

describe('Users Repository Implementation', () => {
  let usersRepository: UsersRepository;

  beforeEach(() => {
    usersRepository = {
      getUser: async (id: string): Promise<UserEntity | null> => {
        // Mock implementation for testing
        return id === '1' ? { id: '1', name: 'John Doe' } : null;
      },
    };
  });

  it('should return a UserEntity for an existing user', async () => {
    const userId = '1';
    const result = await usersRepository.getUser(userId);
    expect(result).toEqual({ id: '1', name: 'John Doe' });
  });

  it('should return null for a non-existing user', async () => {
    const userId = 'non-existing-id';
    const result = await usersRepository.getUser(userId);
    expect(result).toBeNull();
  });
});
