import { gql } from "@apollo/client";

export const getResidentialProducts = () => {
  return {
    query: gql`
      query Residentials {
        primeProducts(first: 100) {
          nodes {
            id
            title
            primeProducts {
              description
              partNumber
              image {
                sourceUrl
              }
            }
            primeCategories {
              nodes {
                name
              }
            }
          }
        }
      }
    `,
  };
};
