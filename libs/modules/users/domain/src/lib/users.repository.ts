import { UserEntity } from "./user.entity";

export interface UsersRepository {
  getUser(id: string): Promise<UserEntity | null>;
}
