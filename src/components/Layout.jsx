import React from 'react'
import cartIcon from '../assets/cart.svg'
import plusIcon from '../assets/plus.svg'
import { Outlet, useNavigate } from 'react-router-dom'
export default function Layout() {
    const navigate = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 70 }}>
            <header style={{ position: 'fixed', display: 'flex', height: 70, top: 0, boxShadow: '1px 1px #ddd', width: '100%', background: '#fff', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '18pt', fontWeight: '700', margin: 10, cursor: 'pointer' }} onClick={() => navigate('/')}>Store</p>
                <div style={{ display: 'flex' }}>
                    <button style={{ padding: 0, background: 'transparent', marginRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none', width: '30px' }} onClick={() => navigate('/cart')}><img src={cartIcon} alt='carticon' style={{ width: '100%' }} /></button>
                    <button style={{ padding: 0, background: 'transparent', marginRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none', width: '30px' }} onClick={() => navigate('/product/create')}><img src={plusIcon} alt='plusicon' style={{ width: '100%' }} /></button>
                </div>
            </header>
            <div style={{ marginTop: 80 }}>
                <Outlet />
            </div>
        </div>
    )
}
