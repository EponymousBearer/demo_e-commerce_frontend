/* eslint-disable react-hooks/rules-of-hooks */
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from "next-auth";
import { Interaction } from '@/components/Interaction';
import AddToCartButton from '@/components/AddToCartButton'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getById(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
  setCart,
  addToCart,
}: {
  params: { slug: string }
  setCart: any;
  addToCart: any;
}) {
  const product = await productService.getById(params.slug)
  const session = await getServerSession();

  if (!product) {
    return <div>Product not found</div>
  }
  // const productId = params.slug
  // const [data, setData] = useState<Product | null>(null);
  // const { cart, setCart, addToCart } = useContext(AppContext);

  const handleAddToCart = (params:any) => {
    addToCart({ productId: params, quantity: 1 });
    setCart((prevTotal: number) => prevTotal + 1);
  };
  return (
    <section className='mx-12 flex flex-col'>
      <div className='p-2 my-2'>
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.title}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.title}</h1>
            </li>
            {/* <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li> */}
            {/* <li> {product.brand}</li> */}
            <li>
              <div className="divider"></div>
            </li>
            <li className='flex'>
              <p>Description:</p>
              <p>{product.description}</p>
            </li>
            <Interaction product_id={product.title} user_id={session?.user?.email as string} />
            {/* <button onClick={handleLike} disabled={liked}>Like</button>
            <button onClick={handleDislike} disabled={disliked}>Dislike</button>
            <button onClick={handleHeart} disabled={hearted}>Heart</button> */}

          </ul>
        </div>
        <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
            {/* <button className='bg-blue-300 px-4 py-2' onClick={() => handleAddToCart(product.title)}>Add To Cart</button> */}
            <AddToCartButton product_title={product.title} />
            {/* <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}