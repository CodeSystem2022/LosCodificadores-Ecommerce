import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Cart from "../components/commons/Cart/Cart";

export const CartContext = createContext({})

export const CartProvider = ({children})=>{
    
    const [cartItems, setCartItems] = useLocalStorage("cart", [])

    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((prevItem, currentItem)=> prevItem + currentItem.quantity, 0)

    const openCart = ()=> setIsOpen(true)
    const closeCart = ()=> setIsOpen(false)

    function getItemQuantity(id){
        return cartItems.find(item => item._id === id)?.quantity || 0
    }

    function increaseCartQuantity(product){
        setCartItems(prevCart => {
            if(prevCart.find(item => item._id === product._id) == null){
                return [...prevCart, {...product, quantity: 1}]
            }else{
                return prevCart.map(item =>{
                    if(item._id === product._id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(product){
        setCartItems(prevItem =>{
            if(prevItem.find(item => item._id === product._id)?.quantity === 1){
                return prevItem.filter(item => item._id !== product._id)
            }else{
                return prevItem.map(item =>{
                    if(item._id === product._id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(prevItem =>{
            return prevItem.filter(item => item.id !== id)
        })
    }

    return(
        <CartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
            <Cart isOpen={isOpen} />
        </CartContext.Provider>
    )
}