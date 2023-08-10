import React from 'react'
import Header from '../Header'
import Content from '../Content'
// import styles from './style.module.css'
import { useState, useContext, useEffect } from 'react'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}
