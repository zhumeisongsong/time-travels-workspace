import { UserEntity } from '@users/domain';

import { mapUserDtoToUserEntity } from './users.mapper';
import { UserDto } from 'graphql-code-generator';

describe('User Mapper', () => {
  it('should map UserDto to UserEntity correctly', () => {
    const userDto: UserDto = { id: '1', name: 'John Doe' };
    const expectedUserEntity: UserEntity = { id: '1', name: 'John Doe' };

    const result = mapUserDtoToUserEntity(userDto);

    expect(result).toEqual(expectedUserEntity);
  });
});
