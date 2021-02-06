import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repository/implementations/PostgreeUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    mailtrapMailProvider,
    postgresUserRepository,
)

const createUserController = new CreateUserController(createUserUseCase);

export {createUserController, createUserUseCase}