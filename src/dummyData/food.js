export default [
  {
    id: '111',
    name: '7 Monks Bar',
    description:
      'Cozy, woodsy tavern with refined American pub grub, 46 beers on tap & kegs of wine.',
    category: 'EATERY',
    groups: ['DOWNTOWN', 'BAR', 'AMERICAN'],
    contact: {
      phone: '2314090332',
      email: 'test@test.com',
      website: 'https://www.google.com/',
      weekdayHours: {
        Sunday: {
          open: '10 am',
          close: '6 pm',
        },
        Monday: {
          open: '10 am',
          close: '6pm',
        },
        Tuesday: {
          open: '10 am',
          close: '6 pm',
        },
        Wednesday: {
          open: '10 am',
          close: '8 pm',
        },
        Thursday: {
          open: '10 am',
          close: '10 pm',
        },
        Friday: {
          open: '10 am',
          close: '10 pm',
        },
        Saturday: {
          open: '10 am',
          close: '10 pm',
        },
      },
    },
    location: {
      address: '128 S Union St',
      city: 'Traverse City',
      state: 'MI',
      zipcode: '49684',
      coordinate: {
        latitude: 44.76317,
        longitude: -85.62404,
      },
    },
    uri:
      'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  // {
  //   id: '2',
  //   name: 'Little Fleet',
  //   contact: {
  //     phone: '2310001234',
  //     email: 'test@test.com',
  //   },
  //   location: {
  //     address: '123 Front St',
  //     city: 'Traverse City',
  //     state: 'MI',
  //     zipcode: '49684',
  //     coordinates: {
  //       latitude: 44.7631,
  //       longitude: -85.6206,
  //     },
  //   },
  //   type: 'Bar',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   details: 'Lorem ipsum dolor sit amet',
  //   website: 'https://www.google.com/',
  //   uri:
  //     'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // },
  // {
  //   id: '3',
  //   name: 'Rare Bird',
  //   contact: {
  //     phone: '2310001234',
  //     email: 'test@test.com',
  //   },
  //   location: {
  //     address: '123 Front St',
  //     city: 'Traverse City',
  //     state: 'MI',
  //     zipcode: '49684',
  //     coordinates: {
  //       latitude: 44.7631,
  //       longitude: -85.6206,
  //     },
  //   },
  //   type: 'Pub',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   details: 'Lorem ipsum dolor sit amet',
  //   website: 'https://www.google.com/',
  //   uri:
  //     'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // },
  // {
  //   id: '4',
  //   name: 'Dish',
  //   contact: {
  //     phone: '2310001234',
  //     email: 'test@test.com',
  //   },
  //   location: {
  //     address: '123 Front St',
  //     city: 'Traverse City',
  //     state: 'MI',
  //     zipcode: '49684',
  //     coordinates: {
  //       latitude: 44.7631,
  //       longitude: -85.6206,
  //     },
  //   },
  //   type: 'Lunch',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   details: 'Lorem ipsum dolor sit amet',
  //   website: 'https://www.google.com/',
  //   uri:
  //     'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // },
  // {
  //   id: '5',
  //   name: 'Low Bar',
  //   contact: {
  //     phone: '2310001234',
  //     email: 'test@test.com',
  //   },
  //   location: {
  //     address: '123 Front St',
  //     city: 'Traverse City',
  //     state: 'MI',
  //     zipcode: '49684',
  //     coordinates: {
  //       latitude: 44.7631,
  //       longitude: -85.6206,
  //     },
  //   },
  //   type: 'Cocktail',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   details: 'Lorem ipsum dolor sit amet',
  //   website: 'https://www.google.com/',
  //   uri:
  //     'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // },
  // {
  //   id: '6',
  //   name: 'Red Ginger',
  //   contact: {
  //     phone: '2310001234',
  //     email: 'test@test.com',
  //   },
  //   location: {
  //     address: '123 Front St',
  //     city: 'Traverse City',
  //     state: 'MI',
  //     zipcode: '49684',
  //     coordinates: {
  //       latitude: 44.7631,
  //       longitude: -85.6206,
  //     },
  //   },
  //   type: 'Sushi',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   details: 'Lorem ipsum dolor sit amet',
  //   website: 'https://www.google.com/',
  //   uri:
  //     'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  // },
];
