import { createContext, useCallback, useMemo, useState } from 'react'

const globalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [data, setData] = useState({
        cart: [], products: [
            {
                id: 1,
                name: "Nike Dunk Low Retro",
                category: 'Men\'s Shoes',
                price: 1909090,
                image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png',
                description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels \'80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century. Colour Shown: White/White/Black Style: DD1391-100'
            },
            {
                id: 2,
                name: "Nike Dunk Low Retro2",
                category: 'Men\'s Shoes',
                price: 1909090,
                image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png',
                description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels \'80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century. Colour Shown: White/White/Black Style: DD1391-100'
            }

        ]
    })
    const handleSetData = useCallback((obj = {}) => {
        const temp = { ...data, ...obj }
        setData(temp)
    }, [data?.cart, data?.products, setData])

    const addToCart = useCallback((productId = "") => {
        const temp = { ...data }
        const indexCart = data?.cart?.findIndex(item => String(item.id) === String(productId))
        if (indexCart >= 0) {
            temp?.cart?.splice(indexCart, 1)
        } else {
            const indexProduct = data?.products?.findIndex(item => String(item.id) === String(productId))
            temp?.cart?.push(data?.products?.[indexProduct])
        }
        setData(temp)
    }, [setData, data?.cart, data?.products])

    const createNewProduct = useCallback((productData = {}) => {
        const temp = { ...data }
        temp?.products?.push(productData)
        setData(temp)
    }, [setData, data?.cart, data?.products])

    const values = useMemo(() => {
        return { ...data, setData: handleSetData, addToCart, createNewProduct }
    }, [handleSetData, addToCart, createNewProduct])

    return (
        <globalContext.Provider value={{ ...values }}>
            {children}
        </globalContext.Provider>
    )
}


export default globalContext