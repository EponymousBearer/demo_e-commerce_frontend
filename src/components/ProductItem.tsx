import { Product } from "@/lib/models/ProductModel"
import Image from "next/image"
import Link from "next/link"

export const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div>
        <div><Image width={300} height={300} alt={product.title} src={product.image} /></div>
        <div>
          <p>Product Title: {product.title}</p>
          {/* <p>Product Description: {product.description}</p> */}
          <p>Price: {product.price}</p>
        </div>
        <br />
      </div>
    </Link>
    // <div className='px-10'>
    //   {product && (
    //     <div className='flex gap-x-10'>
    //       <div><Image width={500} height={500} alt={product.title} src={product.image} /></div>
    //       <div className='space-y-4'>
    //         <h2 className='text-2xl'>{product.title}</h2>
    //         <p>{product.description}</p>
    //         <p>${product.price}</p>
    //         {/* <button className='bg-blue-300 px-4 py-2' onClick={()=>handleAddToCart(product.title)}>Add To Cart</button> */}
    //       </div>
    //     </div>
    //   )}

    // </div>
  )
}
