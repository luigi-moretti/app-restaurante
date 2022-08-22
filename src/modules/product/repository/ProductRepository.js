import clienteRequest from '@/system/repository/clients/graphqlClient';

const actions = {
  getProduct(idProduct) {
    return clienteRequest({
      query: `{
        allProducts(filter: {id: {eq: "${idProduct}"}}) {
          category
          description
          id
          price
          name
          image {
            id
            url
          }
        }
      }
      `,
    });
  },
};

export default actions;
