import { StyleSheet } from 'react-native';
import { graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  button: {
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
  },
  buttonText: {
    color: 'white',
  },
  container:{
    flex: 1,
  }
});
