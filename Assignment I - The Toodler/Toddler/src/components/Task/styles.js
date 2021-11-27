import { StyleSheet } from 'react-native';
import { darkerBlue, graniteGray } from '../../styles/colors';

export default StyleSheet.create({
  icon: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    height: '50%',
    paddingLeft: 10,
    // alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: graniteGray,
  },
});
