import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import getDayOfWeek from '../../../helpers/get_day_of_week';

const query = gql`
  query getEateryById($id: ID!){
    eatery(id: $id) {
      id
      name
      description
      category
      groups
      contact {
        phone
        email
        website
        opentable
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

const props = (props) => {
  const { data } = props;
  const { loading, error, eatery } = data;

  if (loading || error) return { loading, error };
  return {
    locale: eatery,
    loading,
    error,
  };
};

const options = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

export default graphql(query, { props, options });