import React from 'react'
import { useEffect, useContext, useState } from "react";
import { DataContext } from '../../context/index';
import apiCalls from '../../functions/apiCalls';
import styles from './style.module.css';
import getFile from '../../functions/getFile';


export default function OpenFile({ fileName}) {//file name props 
  const context = useContext(DataContext)

  const [upfile, setUpfile] = useState()//currently url file to use
  const [mimeType, setMimeType] = useState()//type of file

  useEffect(() => { fileName && getfilefun() }, [fileName])//1- get new file url 
  useEffect(() => {//2- start popap
    mimeType && upfile && context.setPopup(fileDisplay(upfile, mimeType));
  }, [upfile, mimeType]);


  const getfilefun = async () => {
    const dir = context.activeUrl.join("")
    const url = `files/one/?id=${context.user._id}&dir=${dir}/${fileName}`//full url file in db
    await getFile.getFile(url)//{get and convert newurl for use ,& current type of file}
      .then(res => {
        setUpfile(res.fileUrl)
        setMimeType(res.contentType)
      })
      .catch(err => console.log(err))
  }

  function fileDisplay(upfile, mimeType) {
    console.log(upfile, mimeType);
    switch (mimeType) {

      case 'image/jpeg':
      case 'image/png':
        return <a href={upfile} ><img className={styles.pop} src={upfile} /></a>;

      case 'audio/mpeg':
      case 'audio/wav':
      case "audio/mp4":
        return <video className={styles.pop} src={upfile} controls />;

      case 'video/mp4':
      case 'video/avi':
        return <video className={styles.pop} src={upfile} controls />;

      case 'application/pdf':
        return <a href={upfile} > <embed className={styles.pop} src={upfile} /></a>;

      // case "docx":
      // case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      //   return <textArea className={styles.pop} value={upfile} />

      case 'text/plain':
      case 'text/plain; charset=utf-8':
        return <textArea className={styles.pop} value={upfile} />;

      case 'application/json':
        return <code src={upfile} className={styles.pop} >{JSON.stringify(upfile)}</code>

      default:
        return <a download={upfile} href={upfile}>Click to open file</a>;
    }
  }

  return (
    <>
    </>
  )

}
