import React,{createContext, useContext, useEffect, useReducer, useState} from "react";

const CartContext = createContext();

// Custom hook to use the cart context
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=>{
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : []
    });

    useEffect (()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart]);

    const addToCart = (item) => {
        setCart((prevCart)=>[...prevCart,item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) =>{
        setCart((prevCart) => 
            prevCart.map((item)=> (item.id === itemId ? {...item, quantity: newQuantity}: item))
        );
    };

    const getTotalItems = () => {
        return cart.reduce((total, item)=> total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity,0).toFixed(2)
    };

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice
    };

    return(
            <CartContext.Provider value={contextValue}>
                {children}
            </CartContext.Provider>
       
    )
}
export { CartProvider, useCart };