import ProductRepository from './ProductRepository';

const repositories = {
  product: ProductRepository,
};

const factory = {
  get: (name) => repositories[name],
};

export default factory;
