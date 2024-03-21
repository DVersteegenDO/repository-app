import KadasterRepository from "./Repositories/kadasterRepository";
import KvkRepository from "./Repositories/kvkRepository";
import RdwRepository from "./Repositories/rdwRepository";


const repositories = {
    kadaster: KadasterRepository,
    kvk: KvkRepository,
    rdw: RdwRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};