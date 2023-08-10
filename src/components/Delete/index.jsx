import React, { useContext, useEffect } from 'react'
import apiCalls from '../../functions/apiCalls'
import { DataContext } from '../../context'

export default function Delete(props) {
    const context = useContext(DataContext)
    let dir = context.activeUrl.join("")
    //useEffect(deleteitem(url),[]) ??

    //url יסופק או עי פרופס או קונטקסט או משיכה מגוף הקובץ או מקריאה 
    async function deleteitem() {
        let url = `files/?id=${context.user._id}&dir=${dir}/1691369084344kkk.docx`
        let resolt = await apiCalls.Delete(url)
        context.setActiveFolder(resolt.data)
    }


    return (
        <div>
            <button onClick={deleteitem}>🗑️</button>

        </div>
    )
}
