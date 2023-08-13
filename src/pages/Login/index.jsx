import React from 'react'
import { useJwt } from "react-jwt";


export default function Login() {

    async function login (){
        const res = await console.group()
        localStorage.token = res.token
    }
    return (
        <div>Login test

        </div>
    )
}
