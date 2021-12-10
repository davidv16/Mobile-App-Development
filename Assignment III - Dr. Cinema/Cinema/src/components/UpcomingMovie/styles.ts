import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: '90%',
    height: 350,
  },
  button: {
    height: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'black'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white'

  },
  icon: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    paddingLeft: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap : 'wrap',
  },
  listItem: {
    height: '90%',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    width: 300,
    // flex: 1,
    // flexGrow: 1,
    // // flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
