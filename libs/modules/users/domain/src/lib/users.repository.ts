import { UserEntity } from "./users.entity";

export interface UsersRepository {
  getUser(id: string): Promise<UserEntity | null>;
}
