import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query getLocalesByCategory {
    locales {
      id
      name
      tagline
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
    }
  }
`;
const props = (props) => {
  const { data } = props;
  const { loading, error, locales } = data;

  if (loading || error) return { loading, error };
  return {
    locales,
    loading,
    error,
  };
};

export default graphql(query, { props });
