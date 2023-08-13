import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
export default function CreatFolder() {
    const context = useContext(DataContext)
    const [inputVal, setInputVal] = useState("");
    const [inpDisplay, setInpDisplay] = useState(false);
    const openInput = ()=>{
        setInpDisplay(!inpDisplay)
    }
    const crate = ()=>{
        apiCalls.post(`files/newFolder/?location=${context.activeUrl.join()}&name=${inputVal}`)
        .then(res=>{
            setInpDisplay(false)
            context.setActiveUrl(prev=>[...prev,""])
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <button onClick={openInput} className={`btu ${styles.crateBut}`}>
                crate folder
            </button>
            {inpDisplay?<div>
                <input onChange={(e)=>setInputVal(e.target.value)} type="text" />
                <button onClick={crate}>
                    crate
                </button>
            </div>:""}
        </div>
    )
}
