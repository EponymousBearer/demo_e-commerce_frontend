// /components/ProductDetailsWrapper.tsx

'use client';

import React, { useContext } from 'react';
import ProductDetails from '@/app/product/[slug]/page';
import { AppContext } from '@/app/Context/CartContext';

const ProductDetailsWrapper = ({ params }:any) => {
  const { cart, setCart, addToCart } = useContext(AppContext);

  return <ProductDetails params={params} setCart={setCart} addToCart={addToCart} />;
};

export default ProductDetailsWrapper;