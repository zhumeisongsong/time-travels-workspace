import { describe, it, expect } from 'vitest';
import { UserEntity } from '@users/domain';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let mockUser: UserEntity;

  beforeEach(() => {
    mockUser = {
      id: '123',
      name: 'Test User'
    } as UserEntity;

    usersService = {
      setMe: vi.fn()
    };
  });

  describe('setMe', () => {
    it('should call setMe with user entity', () => {
      usersService.setMe(mockUser);
      expect(usersService.setMe).toHaveBeenCalledWith(mockUser);
    });
  });
});

