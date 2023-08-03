import React from 'react'
import { useEffect, useContext, useState } from "react";
import { DataContext } from '../../context/index';
import apiCalls from '../../functions/apiCalls';
import { Buffer } from 'buffer';
import axios from 'axios';


export default function GetFile(props) {// props --or-- parahms

    let { popup, setPopup } = useContext(DataContext)
    const [file, setFile] = useState(null)


    // useEffect(getfile(
    //     'files/?id=64c912408b5a1420b61a7a0f&dir=images/1691032364332479497.jpg'
    // ), [])

    async function getfile(url) {
        let myFile
        try {
            myFile = await axios.get(url,
                {
                    responseType: 'arraybuffer',
                    headers: { 'Content-Type': 'application/octet-stream' }
                })
            // myFile = await apiCalls.get(url, { responseType: 'arraybuffer' })
            console.log(myFile);
        } catch (error) {
            console.log(error);
        }
        const buffer = Buffer.from(myFile)
        const base64 = buffer.toString('base64');
        const fileUrl = `data:${myFile.headers['content-type']};base64,${base64}`;
        setFile(fileUrl)
        setPopup(<img src={file} />)

        console.log("0", buffer, "1", base64, "2", fileUrl, "3", file);
        //return file;
    }

    return (
        <div>
            <button onClick={() => getfile('http://localhost:8000/files/?id=64c912408b5a1420b61a7a0f&dir=images/1691032364332479497.jpg')} >
                show file
            </button>
            {popup}
        </div>
    )
}
