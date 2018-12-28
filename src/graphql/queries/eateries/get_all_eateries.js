import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import getDayOfWeek from '../../../helpers/get_day_of_week';

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
        weekdayHours {
          ${getDayOfWeek()} {
            open
            close
          }
        }
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

  if (loading || error) return { loading, error };

  return {
    eateries,
    loading,
    error,
  };
};

export default graphql(query, { props });
