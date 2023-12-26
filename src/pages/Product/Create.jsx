import React, { useCallback, useContext } from 'react'
import globalContext from '../../contexts/GlobalContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function CreateProduct() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm({ shouldUseNativeValidation: true })
    const { products, createNewProduct } = useContext(globalContext)

    const onSubmit = useCallback((data) => {
        createNewProduct({ ...data, id: Date.now() })
        navigate('/products')
    }, [products?.length, createNewProduct])

    return (
        <form style={{ gap: '10px', display: 'flex', flexDirection: 'column', padding: 10 }} onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ textAlign: 'center' }}>Create New Product</h2>
            <input style={{ padding: '15px 8px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '1px 1px 2px #ddd' }} type='text' {...register('name', { required: "Please Enter Product Name" })} placeholder='Product Name (ex: New Shoe)' />
            <input style={{ padding: '15px 8px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '1px 1px 2px #ddd' }} type='text' {...register('category', { required: "Please Enter Category" })} placeholder="Category (ex: Men's Shoes)" />
            <input style={{ padding: '15px 8px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '1px 1px 2px #ddd' }} type='number' name='price' {...register('price', { required: "Please Enter Price" })} min={1} placeholder="Price (ex: 10000)" />
            <input style={{ padding: '15px 8px', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '1px 1px 2px #ddd' }} type='text' name='image' {...register('image', { required: "Please Enter Image URL" })} placeholder='Image URL (ex: https://www.example.com/image.jpg' />
            <button style={{ backgroundColor: '#000', color: '#fff' }}>
                Save
            </button>
        </form>
    )
}
