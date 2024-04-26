import ProductModel from "@/lib/models/ProductModel";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { title, description, price, image } = await request.json();

  await connectMongoDB();

  const existingProduct = await ProductModel.findOne({ title });

  if (existingProduct) {
    return new NextResponse("Product is already their", { status: 400 });
  }

  const newProduct = new ProductModel({
    title,
    description,
    price,
    image,
  });

  try {
    await newProduct.save();
    return new NextResponse("Product is added", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
