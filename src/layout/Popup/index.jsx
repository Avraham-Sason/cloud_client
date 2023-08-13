import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context'
import styles from './style.module.css'

export default function Popup() {

    const context = useContext(DataContext)

    function exit() {
        context.setPopup(null)
        context.setDisplay(!context.display)
    }

    return (
        <>
            <div onClick={(e) => exit(e)} className={styles.backpopup} >

                <div className={styles.popup} onClick={e => e.stopPropagation()} >

                    <div className={styles.popheader}>
                        <div className={styles.x} onClick={(e) => exit(e)}>
                            ❌
                        </div>
                    </div>

                    {context.popup}

                </div>

            </div>
        </>
    )
}
