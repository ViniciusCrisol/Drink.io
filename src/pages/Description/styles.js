import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#17161B',
  },
  buttonBack: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  buttonBackText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  thumb: {
    marginTop: 16,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    textAlign: 'center',
    color: 'white',
    maxWidth: 200,
    margin: 8,
    fontSize: 24,
  },
  descriptionText: {
    textAlign: 'left',
    color: '#545365',
    fontWeight: 'bold',
  },
});
