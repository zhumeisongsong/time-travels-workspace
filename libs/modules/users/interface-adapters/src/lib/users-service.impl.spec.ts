import { UsersServiceImpl, usersStates } from './users-service.impl';
import { UserEntity } from '@users/domain';

describe('UsersServiceImpl', () => {
  let service: UsersServiceImpl;

  beforeEach(() => {
    service = new UsersServiceImpl();
  });

  it('should set the user correctly', () => {
    const user: UserEntity = { id: '1', name: 'John Doe' }; // Example user entity
    service.setMe(user);
    expect(usersStates.user).toEqual(user);
  });
});
