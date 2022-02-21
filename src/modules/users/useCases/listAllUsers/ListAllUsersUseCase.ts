import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }: IRequest): User[] {
    const user = this.usersRepository.findById(id);

    if (!user) throw new Error("Bad request: identification");
    if (!user.admin) throw new Error("Unauthorized: not admin");

    return [...this.usersRepository.list()];
  }
}

export { ListAllUsersUseCase };
