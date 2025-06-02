import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function POST(req) {

  const { productData } = await req.json();
  console.log(productData);

  await connectToDb();

  await productModel.create(productData);
  return Response.json({ message: 'Product Added Successfully' }, { status: 200 });
}