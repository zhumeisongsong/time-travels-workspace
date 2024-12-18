import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  it('should create a UserEntity with the given id and name', () => {
    const user: UserEntity = {
      id: '1',
      name: 'John Doe',
    };

    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
  });
});
