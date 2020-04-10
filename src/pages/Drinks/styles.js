import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#17161B',
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
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

  flatListContainer: {
    borderWidth: 2,
    borderColor: '#545365',
    width: '45%',
    height: 200,
    margin: '2.5%',
    borderRadius: 8,
  },
  flatListContainerImage: {
    width: '80%',
    borderRadius: 8,
    marginHorizontal: '10%',
    marginTop: '5%',
    height: 140,
  },
  flatListContainerText: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: 'bold',
    color: '#545365',
    maxWidth: '80%',
    textAlign: 'center',
    marginHorizontal: '10%',
  },
});
