import { UserEntity } from '@users/domain';

import { type UserDto } from 'graphql-code-generator';

export const mapUserDtoToUserEntity = (userDto: UserDto): UserEntity => {
  return {
    id: userDto.id,
    name: userDto.name,
  };
};
