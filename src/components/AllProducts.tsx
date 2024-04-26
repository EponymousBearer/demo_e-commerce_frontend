import React, { useState, useEffect } from 'react'
import productService from "../lib/services/productService";
import { ProductItem } from "./products/ProductItem";

export default async function AllProducts() {
  const products = await productService.getAllProducts()
  return (
    <main className="bg-blue-200 flex justify-center gap-x-10 flex-col">
      <div>
        <div className="text-center text-2xl font-bold py-6">All Products</div>
        <div className="flex flex-col-3 gap-x-8 justify-center">
          {products.map((data: any, index: number) => (
            <ProductItem product={data} key={index} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  try {
    //   const response = await axios.get('http://localhost:3000/product/AllProducts');
    const products = await productService.getAllProducts()
    //   const data = response.data.allProducts;
    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { products: [] },
    };
  }
}
