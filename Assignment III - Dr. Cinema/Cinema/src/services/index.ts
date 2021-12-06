import axios from 'axios';
import credentials from '../resources/credentials.json'
let token = {};
const url: string = 'http://api.kvikmyndir.is/authenticate'

const authentiateApi = async () => {

  try {
    const response = await axios.post(
      `${url}/authenticate`, 
      credentials, {
        headers: { 
          'Content-Type': 'application/json'
      }
    });
    token = response.data;
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }

  return token;
}