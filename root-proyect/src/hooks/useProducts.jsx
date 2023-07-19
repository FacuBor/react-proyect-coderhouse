import { useEffect } from "react"
import { useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from 'react-router-dom'


export const useProducts = () =>{
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then(r => {
                if(categoryId){
                    setProducts(r.filter(prod =>prod.category === categoryId))
                }else{
                    setProducts(r)
                }
                
            })
            .catch( e => console.log(e))
            .finally(()=>{
                setLoading(false)
            })
    }, [categoryId])




    return {products, loading}
}