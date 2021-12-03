import { StyleSheet } from 'react-native';
import { graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: 'black',
    alignSelf: 'center',
  },
  boardTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    
  },
  icon: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  editDeleatContacts:{
    flexDirection:'row',
    justifyContent: 'center',
    
  }
});
