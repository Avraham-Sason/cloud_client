import React, { useContext, useEffect } from 'react'
import apiCalls from '../../functions/apiCalls'
import { DataContext } from '../../context'

export default function Delete() {
    const context = useContext(DataContext)
    let dir = context.activeUrl.join("")
    let dir2 = dir + "/" + context.navItem.name
// console.log("test2","1",dir,"2",dir2);
    

    //url יסופק או עי פרופס או קונטקסט או משיכה מגוף הקובץ או מקריאה 
    async function deleteitem() {
        let url = `files/?id=${context.user._id}&dir=${dir2}`
        let resolt = await apiCalls.Delete(url)
        context.setActiveFolder(resolt.data)
    }
    // console.log(context.navItem.name);


    return (
        <div>
            <button onClick={() => deleteitem()}>🗑️</button>

        </div>
    )
}
