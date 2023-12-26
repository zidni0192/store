import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
            <h2 style={{ padding: '10px 0px', textAlign: 'center' }}>Welcome</h2>
            <button onClick={() => navigate('/products')}>Products</button>
        </div>
    )
}
