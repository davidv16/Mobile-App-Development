import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexGrow: 0.4,
    // borderRadius: 10,
    width: winWidth,
    backgroundColor: 'black',
    padding: 40,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
});
