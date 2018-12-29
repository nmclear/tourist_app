import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const query = gql`
  query getExploreByGroup($category: Category, $group: EntertainmentGroup) {
    entertainmentByGroup(category: $category, group: $group) {
      id
      name
      category
      groups
      uri
    }
  }
`;

const props = ({ data }) => {
  const { loading, error, entertainmentByGroup } = data;

  if (loading || error) return { loading, error };

  return {
    locales: entertainmentByGroup,
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
