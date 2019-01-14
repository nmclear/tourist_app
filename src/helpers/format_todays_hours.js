import getDayOfWeek from './get_day_of_week';

const formatTodaysHours = (hours) => {
  const day = getDayOfWeek();
  const { open, close } = hours[day];
  return `${day} Hours: ${open} - ${close}`;
};

export default formatTodaysHours;
