import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
import NavItem from '../../components/NavItem'
import Delete from '../../components/Delete'
import Down from '../../components/Down'
import styles from './style.module.css'
import { BsFolder2, BsFileEarmark } from "react-icons/bs"
import OpenFile from '../../components/OpenFile'

//let nowUrl
function CloudBoard() {
    const context = useContext(DataContext)

    // const [click, setClick] = useState("ok")
    const [name, setName] = useState("")//1 get the name clicked
    // useEffect(() => { name && click && buttenOpenFolder() }, [click])//2 ask if folder or file 
    useEffect(() => { boardrender() }, [context.activeUrl])//4 render board if folder

    const buttenOpenFolder = async (item, e) => {
        console.log("test", item, e.target.innerText, name);

        e.stopPropagation()

        if (item.includes(".")) {//check if it is a folder
            context.setDisplay(!context.display)
            setName(item)
        }
        else {
            let folder = "/" + item
            context.setActiveUrl(prev => {
                const newdir = [...prev, folder]
                return newdir
            })
        }
    }

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

    return (
        <div className={`center ${styles.bord}`} >

            {

                context.activeFolder.length > 0 ? context.activeFolder.map((item, index) => {

                    return <div className={styles.item} key={index} name={item} onClick={(e) => { buttenOpenFolder(item, e); setName(item) }}>
                        {item}
                        {<NavItem item={item} arr={[<Delete />, <Down path={item} />]} />}
                    </div>
                    //return <div key={index}> <button className={`btu ${styles.card}`} name={item} onClick={(e) => buttenOpenFolder(e)}>{item.includes(".")?<BsFileEarmark/>:<BsFolder2/>} {item}</button></div>
                }) : null}

            {context.display && name && <OpenFile fileName={name} />

            }


        </div>

    )
}

export default CloudBoard