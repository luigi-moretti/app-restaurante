import clienteRequest from '@/system/repository/clients/graphqlClient';

const actions = {
  getProducts() {
    return clienteRequest({
      query: `{
        allProducts {
          id
          name
          price
          category
          image {
            url
          }
        }
      }
      `,
    });
  },
};

export default actions;
