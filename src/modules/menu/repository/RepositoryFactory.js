import MenuRepository from './MenuRepository';

const repositories = {
  menu: MenuRepository,
};

const factory = {
  get: (name) => repositories[name],
};

export default factory;
