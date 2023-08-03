import React from 'react'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/Login'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context'

export default function MainRouter() {

    const { user } = useContext(DataContext)

    // const [user, setUser] = useState(true);
    // useEffect(()=>{
    //    getUser()
    // },[])

    // const getUser = ()=>{
    //    setUser(true)
    //    axios.get(`blablabla/users/ ${localStorage.token}`)
    //    .then(response=>setUser(response))
    //    .catch(error=>{
    //       console.log(error)
    //       setUser(false)
    //    })
    // }

    return (
        <div>
            {user ? <MainLayout /> : <Login />}
        </div>
    )
}
