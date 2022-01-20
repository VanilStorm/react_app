import {gql} from "graphql-tag";
import client from "./index";

export const queries = {
  getAllCategories() {
    return client.query({
      query: gql`
        query {
          categories {
           name
  }
}`
    }).then(data => data.data)
  },

  getCurrentCategory(category) {
    return client.query({
      query: gql`
      query {
        category(input: {
          title: "${category}"
        }) {
        products {
          name, id,inStock, gallery, prices {
          amount, currency {
            label, symbol
          }
        }
      }
    }
  }
      `
    }).then(data => data.data.category)
  },

  getAllCurrencies() {
    return client.query({
      query: gql`
      query {
        currencies {
          label, symbol
        }
      }
      `
    }).then(data => data.data)
  },

  getCurrentProduct(productId) {
    return client.query({
      query: gql`
        query {
        product(id: "${productId}") {
          id, name, gallery, inStock, brand, description, prices {
            amount, currency {
              label, symbol
            }
          }
          attributes {
            id, name, items {
             value, id
        }
      }
    }
  }
  `}).then(data => data.data.product)
  },

}

