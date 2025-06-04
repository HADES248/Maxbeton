import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function DELETE(req) {

  const { id } = await req.json();

  await connectToDb();

  await productModel.findByIdAndDelete({ _id: id });
  return Response.json({ message: "Product Deleted Successfully" }, { status: 200 });
}