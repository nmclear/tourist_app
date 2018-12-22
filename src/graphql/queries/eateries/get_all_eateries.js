import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  {
    eateries {
      id
      name
      description
      category
      groups
      contact {
        phone
        email
        website
      }
      location {
        address
        city
        state
        zipcode
        coordinate {
          latitude
          longitude
        }
      }
      uri
    }
  }
`;

const props = ({ data }) => {
  const { loading, error, eateries } = data;
  console.log(error);
  if (loading || error) return { loading, error };

  console.log(data);
  return {
    eateries,
    loading,
    error,
  };
};

export default graphql(query, { props });
