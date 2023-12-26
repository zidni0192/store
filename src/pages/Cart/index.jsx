import React, { useContext } from 'react'
import cartIcon from '../../assets/cart.svg'
import plusIcon from '../../assets/plus.svg'
import { useNavigate } from 'react-router-dom'
import globalContext from '../../contexts/GlobalContext'
export default function Cart() {
    const navigate = useNavigate()
    const { cart, addToCart } = useContext(globalContext)
    return (
        <>
            {cart?.length ?
                cart?.map((item, index) => (
                    <div key={`${item.id}-${index}`} style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #ddd', padding: '5px 0px' }}>
                        <img style={{ width: '100%', maxWidth: 100, backgroundColor: '#ddd' }} src={item?.image} alt={item?.name} />
                        <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                            <span style={{ fontWeight: '600' }}>{item.name}</span>
                            <span style={{ color: '#797979', fontSize: '10pt' }}>{item.category}</span>
                            <span style={{ fontWeight: '600', fontSize: '13pt' }}>Rp {Intl.NumberFormat('en-US').format(item.price || '')}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}>
                            <button onClick={() => addToCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
                : (
                    <h2 style={{ textAlign: 'center', padding: '10px 0' }}>You have not product on your cart</h2>
                )}
        </>
    )
}
