import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function POST(req) {
  try {
    const body = await req.json();
    const { productData } = body;
    console.log(productData);

    await connectToDb();

    await productModel.create(productData);
    return Response.json({ message: "Product Added Successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error adding product:", error);

    if (error.code === 11000) {
      return Response.json(
        { error: "Product ID already exists." },
        { status: 409 }
      );
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
