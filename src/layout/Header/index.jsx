import React from 'react'
import Uploud from '../../components/Uploud'
import CreatFolder from '../../components/CreatFolder'
import styles from './style.module.css'
import Undu from '../../components/Undu'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={`center ${styles.title}`}>
                <div>☁️saDrive</div>
            </div>
            <nav className={`center ${styles.nav}`}>
                <Uploud />
                <CreatFolder />
                <Undu />
            </nav>
        </div>
    )
}
