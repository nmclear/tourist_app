import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query getLocalesByGroup($category: Category, $group: EateryGroup) {
    localesByGroup(category: $category, group: $group) {
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
  const { loading, error, localesByGroup } = data;

  if (loading || error) return { loading, error };

  return {
    locales: localesByGroup,
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
