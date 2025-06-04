// route.jsx
import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function PUT(req) {
  const body = await req.json();
  const { id, productData } = body;

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing product ID" }), {
      status: 409,
      headers: { "Content-Type": "application/json" },
    });
  }

  await connectToDb();

  const updatedProduct = await productModel.findByIdAndUpdate(
    { _id: id },
    { $set: productData });

  if (!updatedProduct) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ product: updatedProduct }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
