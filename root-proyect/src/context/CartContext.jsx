import { createContext } from "react";
import { useState } from 'react';
import { toast } from "react-toastify";




export const CartContext = createContext()

export const CartProvider = ({children})=>{


    
    const [cart, setCart] = useState([])
    
    const agregarCarrito = (item) =>{
        setCart([...cart, item]);

        toast.success("Producto agregado",{position: toast.POSITION.TOP_LEFT}) 
    }
    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
    }
    const totalCompra = () =>{
        return cart.reduce((acc, item) => acc + item.precio * item.counter, 0)
    }
    const vaciarCart = () =>{
        setCart([])
        toast.error("Carrito vacio",{position: toast.POSITION.TOP_RIGHT})
    }
    const totalCartItems = ()=>{
        return cart.reduce((acc, item) => acc + item.counter, 0)
    }
    const deleteItemCart = (id) =>{
        setCart(cart.filter((item) => item.id !== id));
        toast.warn("Producto eliminado",{position: toast.POSITION.TOP_CENTER})
    }
    return(
        <CartContext.Provider value={{cart, agregarCarrito, isInCart, totalCompra, vaciarCart, totalCartItems, deleteItemCart}}>
            {children}
        </CartContext.Provider>
    )
}