import React from 'react'
import GetFile from '../../components/GetFile'
import Download from '../../components/Download'
import styles from './style.module.css'

export default function Content() {
    return (
        <div className={styles.content}>
            <Download fileName={"479497.jpg"}/>
        </div>
    )
}
