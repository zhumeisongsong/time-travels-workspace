import { UserEntity } from '@users/domain';
import { UsersService } from '@users/application';
import { proxy } from 'valtio';

export type UsersStates = {
  user: UserEntity | null;
};

const usersStates = proxy<UsersStates>({
  user: null,
});

export class UsersServiceImpl implements UsersService {
  setMe(user: UserEntity): void {
    usersStates.user = user;
  }
}
