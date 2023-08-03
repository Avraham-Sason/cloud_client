import React from 'react'
import Header from '../Header'
import Content from '../Content'
import styles from './style.module.css'
import { useState, useContext, useEffect } from 'react'
import Download from '../../components/Download'

export default function MainLayout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Content />
            <Download fileName={"479497.jpg"}/>
        </div>
    )
}
