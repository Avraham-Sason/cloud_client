import React, { useContext } from 'react'
import { DataContext } from '../../context'

export default function Undu() {
    const context = useContext(DataContext)
    const setundu = () => {
        context.setActiveUrl(prev => {
            let url = [...prev]
            context.activeUrl.length>1?url.pop():null
            return url
        })
    }
    //context.setActiveUrl(prev=>console.log("prev",prev))
    return (
        <div>
            <button onClick={setundu}>undu</button>
        </div>
    )
}
