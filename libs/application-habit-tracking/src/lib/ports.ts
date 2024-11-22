import { UserEntity } from "@users/domain";

// user storage service
export type UserStore = {
  user: UserEntity | null;
};

export interface UserStorageService {
  userStore: UserStore;
  getMe: () => void;
  removeUser: () => void;
}