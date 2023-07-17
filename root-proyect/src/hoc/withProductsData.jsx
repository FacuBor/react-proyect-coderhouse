import { useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect } from "react"



export const withProductsData = (Component) => {
    const WithProductsData = () =>{
        const [products, setProducts] = useState ([])
        const [loading, setLoading] = useState(true)

        useEffect(()=>{
            setLoading(true)


            pedirDatos()
                .then(r => setProducts(r))
                .catch( e => console.log(e))
                .finally(()=>{
                    setLoading(false)
                })
        }, [])

        return <Component products={products} loading={loading} />
    }

    return WithProductsData
}