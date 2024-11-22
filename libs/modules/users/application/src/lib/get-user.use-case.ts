import { UserEntity, UsersRepository } from '@users/domain';
import { UsersService } from './users.service';

export class GetUserUseCase {
  private usersRepository: UsersRepository;
  private usersService: UsersService;

  constructor(
    usersRepository: UsersRepository,
    usersService: UsersService,
  ) {
    this.usersRepository = usersRepository;
    this.usersService = usersService;
  }

  async execute(): Promise<void> {
    // fake id, take it from localstorage
    const id = '673d671b72b5a4abd193e083';
    const user: UserEntity | null = await this.usersRepository.getUser(id);

    if (user) {
      this.usersService.setMe(user);
    }
  }
}
