// /components/AddToCartButton.tsx

'use client';

import React, { useContext } from 'react';
import { AppContext } from '@/app/Context/CartContext';

const AddToCartButton = ({ product_title }: { product_title: string }) => {
  const { cart, setCart, addToCart } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart({ productId: product_title, quantity: 1 });
    setCart((prevTotal: number) => prevTotal + 1);
  };

  return (
    <button className='bg-blue-300 px-4 py-2' onClick={handleAddToCart}>Add To Cart</button>
  );
};

export default AddToCartButton;