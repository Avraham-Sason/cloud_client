import React, { useState } from 'react'
import { createContext } from "react";
import Popup from '../layout/Popup';

export const DataContext = createContext({});

export default function Context({ children }) {
    const fakeUser = {
        _id: '64c912408b5a1420b61a7a0f'
}

    const [popup, setPopup] = useState(null)
    const [user, setUser] = useState(fakeUser)
    const [activeFolder, setActiveFolder] = useState([])
    const [activeUrl, setActiveUrl] = useState([user._id])

    return (
        <>
            <DataContext.Provider value={{ user, setUser, popup, setPopup ,activeFolder, setActiveFolder,activeUrl, setActiveUrl}} >
                {children}
                {popup && <Popup />}
            </DataContext.Provider>
        </>
    )
}
