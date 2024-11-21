// Move to Domain in front-end
export type UserEntity = {
  id: string;
  name: string;
};

export interface UsersRepository {
  getUser(id: string): Promise<UserEntity | null>;
}
