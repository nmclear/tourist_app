import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import config from '../config/locales_by_group_config';

const query = gql`
  query getLocalesByGroup($category: Category, $group: LocaleGroup) {
    localesByGroup(category: $category, group: $group) {
      id
      name
      tagline
      category
      groups
      uri
    }
  }
`;

export default graphql(query, config);
