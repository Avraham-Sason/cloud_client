import React from 'react'
import { useEffect, useContext, useState } from "react";
import { DataContext } from '../../context/index';
import apiCalls from '../../functions/apiCalls';
import axios from 'axios';
import styles from './style.module.css';
import Down from '../Down';




export default function GetFile(props) {// props --or-- parahms
  let { setPopup, user, activeUrl } = useContext(DataContext)

  let [upfile, setUpfile] = useState(undefined)
  let [mimeType, setMimeType] = useState(undefined)
  let dir = activeUrl.join("")

  useEffect(() => {
    mimeType && upfile && setPopup(fileDisplay(upfile, mimeType));
  }, [upfile]);

  async function getfileFun(url) {
    try {
      await axios
        .get(url, { responseType: 'arraybuffer' })
        .then((response) => {
          let contentType = response.headers['content-type'];
          let blob = new Blob([response.data], { type: contentType });
          let fileUrl = URL.createObjectURL(blob);
          setUpfile(fileUrl);
          setMimeType(contentType)
          console.log(response, contentType, fileUrl);
        })
    } catch (error) {
      console.log(error);
    }
  }

  function fileDisplay(fileUrl, mimeType) {
    switch (mimeType) {

      case 'image/jpeg':
      case 'image/png':
        return <a href={fileUrl} ><img className={styles.pop} src={fileUrl} /></a>;

      case 'audio/mpeg':
      case 'audio/wav':
        return <video className={styles.pop} src={fileUrl} controls />;

      case 'video/mp4':
        return <video className={styles.pop} src={fileUrl} controls />;

      case 'application/pdf':
        return <a href={fileUrl} > <embed className={styles.pop} src={fileUrl} /></a>;

      case "docx":
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return <textArea className={styles.pop} value={fileUrl} />

      case 'text/plain':
      case 'text/plain; charset=utf-8':
        return <textArea className={styles.pop} value={fileUrl} />;

      case 'application/json':
        return <code src={fileUrl} className={styles.pop} >{JSON.stringify(fileUrl)}</code>

      default:
        return <a download={fileUrl} href={fileUrl}>Click to open file</a>;
    }
  }

  return (
    <div>//
      <button onClick={() => getfileFun(`files/one/?id=${user._id}&dir=${dir}/1691032337930479497.jpg`)}>
        {/* <button onClick={() => getfileFun('files/one/?id=64c912408b5a1420b61a7a0f&dir=images/a.text')} > */}
        show file
      </button>
      {/* {upfile && <Down fileUrl={upfile} type={mimeType} />} */}
    </div >
  )
}

