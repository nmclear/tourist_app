import {
  BREAKFAST,
  COFFEE,
  BAKERY,
  BIKE,
  AMERICAN,
  PIZZA,
  MEXICAN,
  SANDWHICH,
  HIKING,
  FARMS,
  PARKS,
  BEACHES,
  BREWERY,
  DOWNTOWN,
  BAR,
  WINERY,
  SHOPPING,
  THEATER,
  STEAK,
  ITALIAN,
  SEAFOOD,
  SUSHI,
  DESSERT,
  NIGHT_LIFE,
  ART,
  LATE_NIGHT,
  HOTEL,
} from './group_types';

import {
  MORNING_TIME,
  NOON_TIME,
  AFTERNOON_TIME,
  NIGHT_TIME,
  LATE_TIME,
} from './time_of_day_types';

const greetingOptionsMap = new Map();

greetingOptionsMap.set(MORNING_TIME, {
  0: [BREAKFAST, COFFEE, BAKERY],
  1: [COFFEE],
  2: [BIKE],
});

greetingOptionsMap.set(NOON_TIME, {
  0: [AMERICAN, PIZZA, MEXICAN, SANDWHICH],
  1: [HIKING, FARMS, PARKS, BEACHES],
  2: [BEACHES],
});

greetingOptionsMap.set(AFTERNOON_TIME, {
  0: [AMERICAN, PIZZA, MEXICAN, BREWERY, DOWNTOWN],
  1: [BAR, BREWERY, WINERY],
  2: [SHOPPING, THEATER],
});

greetingOptionsMap.set(NIGHT_TIME, {
  0: [AMERICAN, PIZZA, MEXICAN, STEAK, ITALIAN, SEAFOOD, SUSHI, DESSERT, BAR],
  1: [BAR, NIGHT_LIFE],
  2: [THEATER, ART],
});

greetingOptionsMap.set(LATE_TIME, {
  0: [LATE_NIGHT],
  1: [BAR, NIGHT_LIFE],
  2: [HOTEL],
});

export default greetingOptionsMap;
