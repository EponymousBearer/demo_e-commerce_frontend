import { Metadata } from "next";
import AddProduct from "@/components/AddProduct";
import AllProducts from "@/components/AllProducts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import Register from "./register/page";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Adnan E Commerce',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs',
}
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/');
  return (
    <section>
      <AllProducts />
      <AddProduct />
      {/* <Register/> */}
    </section>
  );
}
