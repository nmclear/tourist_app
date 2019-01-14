import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 5,
  },
  iosShadow: {
    shadowColor: '#2d3436',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  androidShadow: {
    elevation: 5,
  },
  arrowStyle: {
    justifyContent: 'flex-end',
    paddingRight: 10,
    alignItems: 'center',
  },
});

export default styles;
