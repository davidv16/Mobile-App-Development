import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 0.2,
    borderColor: 'black',
  },
  button: {
    height: 50,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    paddingLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  listItem: {
    margin: 5,
    padding: 5,
    // Gamlar stillingar
    // backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
