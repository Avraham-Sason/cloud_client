import React from 'react'
import Uploud from '../../components/Uploud'
import CreatFolder from '../../components/CreatFolder'
import styles from './style.module.css'
import Undu from '../../components/Undu'

export default function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.title}>
                <div>☁️SagiDrive</div>
            </div>

            <div className={styles.nav}>
                <div className={styles.cloudnav}>
                    <Uploud />
                    <CreatFolder />
                </div>

                <Undu />
            </div>

        </div>
    )
}
