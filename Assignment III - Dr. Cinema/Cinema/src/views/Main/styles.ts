import { StyleSheet } from 'react-native';
import { darkerBlue, graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  paragraph: {
    marginTop: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  },
  button: {
    margin: 10,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20

  },
  logo: {
    width: 200,
    height: 200,
  },
});
