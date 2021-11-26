/*
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@Toodler', jsonValue);
  } catch (e) {
    console.log('error saving data')
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@Toodler');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error catching data')
  }
};

export default {
  storeData,
  getData,
};
*/