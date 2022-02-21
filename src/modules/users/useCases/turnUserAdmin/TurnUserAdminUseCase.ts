import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }: IRequest): User {
    const user = this.usersRepository.findById(id);

    if (!user) throw new Error("Unauthorized: not admin");

    const admin = this.usersRepository.turnAdmin(user);

    return admin;
  }
}

export { TurnUserAdminUseCase };
