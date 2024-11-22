import { UserEntity } from '@users/domain';

export interface UsersService {
  setMe: (user: UserEntity) => void;
}
