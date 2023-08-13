import axios from 'axios';
// import apiCalls from './apiCalls';
// import { useContext } from 'react';
// import { DataContext } from '../context';

async function getFile(fullUrl) {
  let info = {}
  try {
    const resolt = await axios
      .get(fullUrl, { responseType: 'arraybuffer' })
      .then((response) => {
        let contentType = response.headers['content-type'];
        let blob = new Blob([response.data], { type: contentType });
        let fileUrl = URL.createObjectURL(blob);
        info = { fileUrl, contentType }
      })
  } catch (error) {
    console.log(error);
  }
  return info;
}
export default ({ getFile })