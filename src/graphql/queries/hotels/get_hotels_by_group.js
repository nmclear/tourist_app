import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import getDayOfWeek from '../../../helpers/get_day_of_week';

const query = gql`
  query getHotelsByGroup($category: Category, $group: HotelGroup) {
    hotelsByGroup(category: $category, group: $group) {
      id
      name
      category
      groups
      uri
    }
  }
`;

const props = ({ data }) => {
  const { loading, error, hotelsByGroup } = data;

  if (loading || error) return { loading, error };

  return {
    locales: hotelsByGroup,
    loading,
    error,
  };
};

const options = ({ navigation }) => {
  const category = navigation.getParam('category');
  const group = navigation.getParam('group');

  return {
    variables: { category, group },
    fetchPolicy: 'cache-and-network',
    partialRefetch: true,
  };
};

export default graphql(query, { props, options });
