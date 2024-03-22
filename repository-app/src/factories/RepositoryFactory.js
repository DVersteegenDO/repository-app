import KadasterRepository from "./Repositories/kadasterRepository";
import KvkRepository from "./Repositories/kvkRepository";
import RdwRepository from "./Repositories/rdwRepository";
import UserRepository from "./Repositories/userRepository";


const repositories = {
    kadaster: KadasterRepository,
    kvk: KvkRepository,
    rdw: RdwRepository,
    user: UserRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};