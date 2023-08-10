import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
import styles from './style.module.css'


export default function Uploud() {

    const context = useContext(DataContext)
    const [file, setFile] = useState()

    async function onsubmit(e) {
        let dir = context.activeUrl.join("")
        e.preventDefault()
        const fileData = new FormData()
        fileData.append('upfile', file)
        try {
            // const result = await apiCalls.post(`files/upload/?id=${context.user._id}&dir=${context.user._id}`, fileData)
            const result = await apiCalls.post(`files/upload/?id=${context.user._id}&dir=${dir}`, fileData)
            context.setActiveFolder(result.data)
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form className={`${styles.form}`} onSubmit={onsubmit}>
                <input type='file' required={true} onChange={e => setFile(e.target.files[0])} />
                <button className={`haedBtu`} type='submit'>⏫</button>
            </form>
        </>
    )
}
