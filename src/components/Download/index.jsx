import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Download = ({ fileName }) => {
    const [fileUrl, setFileUrl] = useState(null);
    const clickBtu = (fileName) => {
        axios.get(`files/download/?dir=root/images/${fileName}`, {
            responseType: 'blob',
        })
            .then(res => {
                let blod = res.data
                const url = window.URL.createObjectURL(new Blob([blod]))
                setFileUrl(url)
                downloadFile(fileName, url)

            })
            .catch(err => { console.log(err) })
    }
    const downloadFile = (fileName, url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };
    return (
        <>
            <button className={`btu`} onClick={() => clickBtu(fileName)}>download</button>
            {/* {fileUrl&&<img src={fileUrl} width="500" height="600" />} */}
        </>
    );
}

export default Download;
