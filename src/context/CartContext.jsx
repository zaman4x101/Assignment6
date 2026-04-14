import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      toast.info(`"${product.name}" is already in your cart!`);
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`"${product.name}" added to cart! 🛒`);
  };

  const removeFromCart = (productId) => {
    const item = cart.find((c) => c.id === productId);
    setCart((prev) => prev.filter((c) => c.id !== productId));
    if (item) toast.error(`"${item.name}" removed from cart.`);
  };

  const clearCart = () => {
    setCart([]);
    toast.success('🎉 Checkout successful! Enjoy your tools!');
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, isInCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}