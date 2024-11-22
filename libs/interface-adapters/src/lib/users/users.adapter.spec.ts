import { UsersAdapter } from './users.adapter';
import { UserDto } from 'graphql-code-generator';
import { describe, it, expect } from 'vitest';

describe('UsersAdapter', () => {
  it('should convert UserDto to UserEntity correctly', () => {
    const userDto: UserDto = { id: '1', name: 'John Doe' };
    const userEntity = UsersAdapter.toUser(userDto);
    expect(userEntity).toEqual({ id: '1', name: 'John Doe' });
  });

  it('should handle empty name in UserDto', () => {
    const userDto: UserDto = { id: '2', name: '' };
    const userEntity = UsersAdapter.toUser(userDto);
    expect(userEntity).toEqual({ id: '2', name: '' });
  });
});
