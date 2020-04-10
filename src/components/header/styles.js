import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: '30%',
    backgroundColor: '#D96A29',
  },
  title: {
    position: 'absolute',
    top: 24,
    left: 16,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 42,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
