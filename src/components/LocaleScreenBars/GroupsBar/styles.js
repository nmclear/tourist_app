import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  badgeContainerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 6,
    minWidth: 70,
    marginHorizontal: 7,
    marginBottom: 2,
    borderColor: 'rgba(45, 52, 54, 0.6)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  badgeShadowStyle: {
    shadowColor: '#2d3436',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
});