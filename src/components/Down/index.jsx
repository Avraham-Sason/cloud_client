import React, { useContext } from 'react'
import { DataContext } from '../../context';
import apiCalls from '../../functions/apiCalls';
import getFile from '../../functions/getFile';

export default function Down({path}) {// requires-fileUrl- by props/context ?

    const context = useContext(DataContext)

    const downloadFile = async (e) => {
        e.stopPropagation()
        let DownUrl = context.activeUrl.join("") + "/" + context.navItem.name
        console.log(DownUrl, path,context.navItem.name);
        await getFile.getFile(`files/one/?id=${context.user._id}&dir=${DownUrl}`)
        .then(res=>{
            e.target.href = res.fileUrl
            e.target.download = context.navItem.name

        })
    }
    return (
        <div>
            <a onClick={(e
                )=>downloadFile(e)} >download⏬</a>
        </div>
    )
}






