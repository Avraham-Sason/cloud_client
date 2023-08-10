import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
import styles from './style.module.css'
import {BsFolder2,BsFileEarmark} from "react-icons/bs"

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

    const buttenOpenFolder = async (e) => {
        let foldername = "/" + e.target.name
        context.setActiveUrl(prev => {
            const newdir = [...prev, foldername]
            return e.target.name.includes(".")?prev : newdir
        })
    }

    return (
        <div className={`center ${styles.bord}`} >
            {context.activeFolder.length > 0 ? context.activeFolder.map((item, index) => {
                return <div key={index}> <button className={`btu ${styles.card}`} name={item} onClick={(e) => buttenOpenFolder(e)}>{item.includes(".")?<BsFileEarmark/>:<BsFolder2/>} {item}</button></div>
            }) : null}
        </div>
    )
}

export default CloudBoard