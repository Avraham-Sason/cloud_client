import React, { useContext } from 'react'
import { DataContext } from '../../context';
import apiCalls from '../../functions/apiCalls';

export default function Down(props) {// requires-fileUrl- by props/context ?

    const context = useContext(DataContext)

     const downloadFile = async (e) => {
        let DownUrl = context.activeUrl.join("") + "/" + context.navItem.name
        const myFile = await apiCalls.get(`files/one/?id=${context.user._id}&dir=${DownUrl}`)
        console.log(DownUrl, myFile);
        e.target.href = myFile.data
        e.target.download=context.navItem.name
    }
    return (
        <div>
            <a onClick={downloadFile} >download⏬</a>
        </div>
    )
}






