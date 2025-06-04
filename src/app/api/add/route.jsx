import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function POST(req) {
  try {
    const body = await req.json();

    const { productData } = body;

    const id = productData.id;

    await connectToDb();

    // Duplicate check (adjust field if necessary)
    const existingProduct = await productModel.findOne({ id });
    if (existingProduct) {
      return Response.json(
        { error: "A product with this title already exists" },
        { status: 409 }
      );
    }

    await productModel.create(productData);
    return Response.json({ message: "Product Added Successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error adding product:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
