import { connectMongoDB } from "@/lib/mongodb";
import ProductModel from "@/lib/models/ProductModel";
import productService from "@/lib/services/productService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const products = await productService.getAllProducts();
  await connectMongoDB();

  await ProductModel.deleteMany();
  await ProductModel.insertMany(products);

  return NextResponse.json({
    message: "seeded successfully",
    products,
  });
};
