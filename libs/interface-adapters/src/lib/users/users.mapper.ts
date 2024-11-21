import { type UserDto } from 'graphql-code-generator';

import { UserEntity } from './users.repository';

export const mapUserDtoToUserEntity = (userDto: UserDto): UserEntity => {
  return {
    id: userDto.id,
    name: userDto.name,
  };
};
