// route.jsx
import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing product ID" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectToDb();

    const updatedProduct = await productModel.findOneAndUpdate(
      { id },
      { $set: updateData });

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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
