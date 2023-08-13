import React, { useContext } from 'react'
import { DataContext } from '../../context';
import apiCalls from '../../functions/apiCalls';
import getFile from '../../functions/getFile';

export default function Down({ path }) {// requires-fileUrl- by props/context ?

    const context = useContext(DataContext)

    const downloadFile = async (e) => {
        e.stopPropagation()
        let url = context.activeUrl.join("") + "/" + path //context.navItem.name
        await getFile.getFile(`files/one/?id=${context.user._id}&dir=${url}`)
            .then(res => {
                console.log("down", url, path, context.navItem.name, res);
                e.target.href = res.fileUrl
               return e.target.download = path//context.navItem.name
            })
    }
    return (
        <>
            <a download = {path} onClick={(e) => downloadFile(e)} >download⏬</a>
        </>

    )
}






