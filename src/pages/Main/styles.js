import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#17161B',
  },
  form: {
    maxHeight: 40,
    marginVertical: 16,
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginLeft: '5%',
    marginVertical: 16,
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  categoryTag: {
    margin: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#D99C52',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20,
  },
  flatListContainer: {
    marginHorizontal: 14,
    marginVertical: '2.5%',
    alignItems: 'center',
    maxHeight: 170,
  },
  flatListContainerImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  flatListContainerText: {
    textAlign: 'left',
    color: '#545365',
    fontWeight: 'bold',
    maxWidth: 140,
    fontSize: 14,
  },
});
