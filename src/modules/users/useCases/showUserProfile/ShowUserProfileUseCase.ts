import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }: IRequest): User {
    const user = this.usersRepository.findById(id);

    if (!user) throw new Error("Bad request: identification");

    return user;
  }
}

export { ShowUserProfileUseCase };
