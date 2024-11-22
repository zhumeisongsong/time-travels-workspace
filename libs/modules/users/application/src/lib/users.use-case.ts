import { UserEntity } from '@users/domain';
import { UsersRepositoryImpl } from 'interface-adapters';

export class UsersUseCase {
  private usersRepository: UsersRepositoryImpl;

  constructor(usersRepository: UsersRepositoryImpl) {
    this.usersRepository = usersRepository;
  }

  async getUser(id: string): Promise<UserEntity | null> {
    return await this.usersRepository.getUser(id);
  }
}
