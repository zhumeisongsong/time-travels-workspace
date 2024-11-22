import { UserEntity } from './users.entity';

describe('UserEntity', () => {
  it('should create a UserEntity with the given id and name', () => {
    const user: UserEntity = {
      id: '1',
      name: 'John Doe',
    };

    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
  });

  it('should not allow an empty id', () => {
    const user: UserEntity = {
      id: '',
      name: 'Jane Doe',
    };

    expect(user.id).toBe('');
    expect(user.name).toBe('Jane Doe');
  });
});
