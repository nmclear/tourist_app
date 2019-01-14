import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import config from '../config/locales_by_category_config';

import getDayOfWeek from '../../../helpers/get_day_of_week';

const query = gql`
  query getLocalesByCategory($category: Category){
    localesByCategory(category: $category) {
      id
      name
      tagline
      description
      category
      groups
      contact {
        phone
        email
        website
        menu
        opentable
        social {
          facebook
          instagram
          twitter
        }
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

export default graphql(query, config);
