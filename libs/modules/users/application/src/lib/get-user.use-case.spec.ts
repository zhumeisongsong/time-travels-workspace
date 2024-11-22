import { describe, it, expect, vi } from 'vitest';
import { UserEntity, UsersRepository } from '@users/domain';
import { GetUserUseCase } from './get-user.use-case';
import { UsersService } from './users.service';

describe('GetUserUseCase', () => {
  let getUserUseCase: GetUserUseCase;
  let mockUsersRepository: UsersRepository;
  let mockUsersService: UsersService;
  let mockUser: UserEntity;

  beforeEach(() => {
    mockUser = {
      id: '673d671b72b5a4abd193e083',
      name: 'Test User'
    } as UserEntity;

    mockUsersRepository = {
      getUser: vi.fn().mockResolvedValue(mockUser)
    } as unknown as UsersRepository;

    mockUsersService = {
      setMe: vi.fn()
    };

    getUserUseCase = new GetUserUseCase(mockUsersRepository, mockUsersService);
  });

  describe('execute', () => {
    it('should fetch user and set it in service', async () => {
      await getUserUseCase.execute();

      expect(mockUsersRepository.getUser).toHaveBeenCalledWith('673d671b72b5a4abd193e083');
      expect(mockUsersService.setMe).toHaveBeenCalledWith(mockUser);
    });

    it('should not set user if none is found', async () => {
      mockUsersRepository.getUser = vi.fn().mockResolvedValue(null);
      
      await getUserUseCase.execute();

      expect(mockUsersRepository.getUser).toHaveBeenCalled();
      expect(mockUsersService.setMe).not.toHaveBeenCalled();
    });
  });
});
