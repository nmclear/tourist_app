import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import config from '../config/locale_config';

import getDayOfWeek from '../../../helpers/get_day_of_week';

const query = gql`
query getLocaleById($id: ID!){
  locale(id: $id) {
   
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

export default graphql(query, config);
