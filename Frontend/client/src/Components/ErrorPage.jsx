import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>404 Page is Not found</h1>
            <button onClick={() => { navigate('/') }}>Go to Home</button>
            <button onClick={() => { navigate('/about') }}>Go to About</button>
            <button onClick={() => { navigate('/contact') }}>Go to Contact</button>
            <button onClick={() => { navigate('/', { replace: true }) }}>FORGOT ONE PLACE OF STACK</button>

            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>
    )
}
