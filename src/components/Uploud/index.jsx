import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'


export default function Uploud() {

    const context = useContext(DataContext)
    const [file, setFile] = useState()

    async function onsubmit(e) {
        e.preventDefault()
        console.log(file);
        const fileData = new FormData()
        fileData.append('upfile', file)
        try {
            const result = await apiCalls.post(`http://localhost:8000/files/upload/?id=${context.user._id}&dir=${"notes"}`, fileData)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={onsubmit}>
                <input type='file' required={true} onChange={e => setFile(e.target.files[0])} />
                <button type='submit'>⏫</button>
            </form>
        </div>
    )
}
