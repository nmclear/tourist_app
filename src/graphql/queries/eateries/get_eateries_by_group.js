import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query getEateriesByGroup($category: Category, $group: EateryGroup) {
    eateriesByGroup(category: $category, group: $group) {
      id
      name
      description
      category
      groups
      uri
    }
  }
`;

const props = ({ data }) => {
  const { loading, error, eateriesByGroup } = data;

  if (loading || error) return { loading, error };

  return {
    // eateries: eateriesByGroup,
    locales: eateriesByGroup,
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
