import React, { useContext, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import globalContext from '../../contexts/GlobalContext'
export default function Product() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { products, cart, addToCart } = useContext(globalContext)
    const product = useMemo(() => {
        const temp = products?.find(item => String(id || '') === String(item.id || '')) || {}
        temp.inMyCart = cart?.some(product => String(id) === String(product.id))
        return temp
    }, [id, products?.length, cart?.length])

    return (
        <>
            <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h1 style={{ margin: 0, fontSize: '14pt' }}>
                    {product?.name}
                </h1>
                <span style={{ fontSize: '10pt', lineHeight: '12px' }}>Men's shoe</span>
                <span style={{ fontWeight: '600', fontSize: '13pt', marginTop: '8px' }}>Rp {Intl.NumberFormat('en-US')?.format(product?.price || '')}</span>
            </div>
            <div>
                <img style={{ width: '100%' }} src={product?.image} alt={product?.name} />
            </div>
            <div style={{ display: 'flex', padding: 10, flexDirection: 'column', gap: 20 }}>
                <p style={{ margin: 0 }}>
                    {product?.description}
                </p>
                <button style={product?.inMyCart ? { backgroundColor: '#fff', color: '#000', boxShadow: '0px 1px 5px #ddd', border: '1px solid #ddd' } : { backgroundColor: '#000', color: '#fff' }} onClick={() => { addToCart(product.id) }}>
                    {product?.inMyCart ? "Remove from your" : "Add to"} cart
                </button>
                <button style={{ backgroundColor: '#fff', color: '#000', boxShadow: '0px 1px 5px #ddd', border: '1px solid #ddd' }} onClick={() => { navigate(-1) }}>
                    Back
                </button>
            </div>
        </>
    )
}
