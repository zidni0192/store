import React, { useContext } from 'react'
import styles from './index.module.css'
import cartIcon from '../../assets/cart.svg'
import plusIcon from '../../assets/plus.svg'
import { useNavigate } from 'react-router-dom'
import globalContext from '../../contexts/GlobalContext'
export default function Products() {
    const navigate = useNavigate()
    const { products } = useContext(globalContext)
    return (
        <>
            <h2 style={{ padding: 10, margin: 0 }}>Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'calc(50% - 5px) calc(50% - 5px)', gap: '10px 10px' }}>
                {products?.map((item, index) => (
                    <div key={`${item.id}-${index}`} style={{ display: 'flex', flexDirection: 'column' }} onClick={() => navigate(`/product/${item.id}`)}>
                        <img style={{ width: '100%', backgroundColor: '#ddd' }} src={item?.image} alt={item?.name} />
                        <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <span style={{ fontWeight: '600' }}>{item.name}</span>
                            <span style={{ color: '#797979', fontSize: '10pt' }}>{item.category}</span>
                            <span style={{ fontWeight: '600', fontSize: '13pt' }}>Rp {Intl.NumberFormat('en-US').format(item.price || '')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
