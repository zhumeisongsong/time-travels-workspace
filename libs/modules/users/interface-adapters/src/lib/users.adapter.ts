import { UserEntity } from '@users/domain';

import { type UserDto } from 'graphql-code-generator';

// Supports bi-directional adaptation
// There is complex adaptation logic (e.g., format conversion, field splicing, or default value padding).
export class UsersAdapter {
  //TODO: Rename to userResponse in back-end
  static toUser(userDto: UserDto): UserEntity {
    return {
      id: userDto.id,
      name: userDto.name,
    };
  }
}
