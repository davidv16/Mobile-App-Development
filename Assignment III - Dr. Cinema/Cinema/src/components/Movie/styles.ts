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
  year: {
    // paddingLeft: 10,
    // flex: 1,
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: 10,
    // flex: 1,
  },
  titleSection: {
    // alignSelf: 'flex-start',
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  mainSection: {
    flex: 2,
    borderColor: 'pink',
    borderWidth: 1,
    flexDirection: 'row',
  },
  bottomSection: {
    flex: 1,
    // alignContent: 'flex-end',
    borderColor: 'yellow',
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#006d77',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
