import { describe, it, beforeEach } from 'vitest';
import { GetUserUseCase } from './get-user.use-case';
import { UsersRepository } from '@users/domain';
import { UsersService } from './users.service';

describe('GetUserUseCase', () => {
  let getUserUseCase: GetUserUseCase;
  let usersRepository: UsersRepository;
  let usersService: UsersService;

  beforeEach(() => {
    usersRepository = {
      getUser: async (id: string) => ({ id, name: 'Test User' }), // Mock implementation
    } as unknown as UsersRepository;

    usersService = {
      setMe: (user) => {
        // Mock implementation
      },
    } as unknown as UsersService;

    getUserUseCase = new GetUserUseCase(usersRepository, usersService);
  });

  it('should set the user correctly when user is found', async () => {
    await getUserUseCase.execute();
    // Add your expectations here based on the mocked usersService
  });

  it('should not set the user when user is not found', async () => {
    usersRepository.getUser = async (id: string) => null; // Simulate user not found
    await getUserUseCase.execute();
    // Add your expectations here based on the mocked usersService
  });
});

