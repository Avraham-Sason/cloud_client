import axios from 'axios';
// import apiCalls from './apiCalls';
// import { useContext } from 'react';
// import { DataContext } from '../context';

// let context = useContext(DataContext)
// let { setPopup, user, activeUrl,navItem } = useContext(DataContext)

async function getFile(fullUrl) {
  //  console.log( fullUrl);
  // let [upfile, setUpfile] = useState(undefined)// currently url file to use
  // let [mimeType, setMimeType] = useState(undefined)//type of file
  // let dir = activeUrl.join("")
  // let fullUrl = `files/one/?id=${user._id}&dir=${dir}/${navItem.name}`//file url in db
  let info = {}
  try {
    const resolt = await axios
      .get(fullUrl, { responseType: 'arraybuffer' })
      .then((response) => {
        let contentType = response.headers['content-type'];
        let blob = new Blob([response.data], { type: contentType });
        let fileUrl = URL.createObjectURL(blob);
        // console.log(response, contentType, fileUrl);
        info = { fileUrl, contentType }
        //  return info;
      })
  } catch (error) {
    console.log(error);
  }
  // console.log("fileinfo", info);
  return info;
}
export default ({ getFile })