import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dataBase } from "../firebase/config"

export const useProducts = () =>{
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoryId } = useParams()
        

    useEffect(()=>{
        setLoading(true)
        //armar referencia (sync)
        const productsRef = collection(dataBase, "productos")
        const q = categoryId 
                            ? query(productsRef, where('category', '==', categoryId))
                            : productsRef

        //llamar referencia (async)
        getDocs(q)
        .then((resp)=>{
            const docs = resp.docs.map( (doc)=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            } )
            setProducts(docs)
            
        })
        .catch(e => console.log(e))
        .finally(()=> setLoading(false))

        
    }, [categoryId])




    return {products, loading}
}