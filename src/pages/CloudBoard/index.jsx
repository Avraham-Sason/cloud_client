import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
//let nowUrl
function CloudBoard() {
    const context = useContext(DataContext)
    useEffect(() => { boardrender() }, [context.activeUrl])


    const boardrender = async () => {
        try {
            let dir = context.activeUrl.join("")
            let url = `files/?id=${context.user._id}&dir=${dir}`//with id in dir from the context
            let folder = await apiCalls.get(url)
            await context.setActiveFolder(folder.data)
        } catch (error) {
            console.log(error);
        }
    }

    const buttenopenfolder = async (e) => {
        let foldername = "/" + e.target.name
        context.setActiveUrl(prev => {
            const newdir = [...prev, foldername]
            return newdir
        })
    }

    return (
        <div>
            {context.activeFolder.length > 0 ? context.activeFolder.map((item, index) => {
                return <div key={index}> <button name={item} onClick={(e) => buttenopenfolder(e)}> {item}</button></div>
            }) : null}
        </div>
    )
}

export default CloudBoard