import { connectToDb } from "@/db/database/mongodb";
import { productModel } from "@/db/models/product";

export async function POST(req) {

  const { id } = await req.json();

  await connectToDb();

  // const filter = {}

  // if (parking) filter.parking = parking;
  // if (furnished) filter.furnished = furnished;

  const product = await productModel.findById({ _id: id });
  return Response.json({ product }, { status: 200 });
}

export async function GET() {

  await connectToDb();

  const products = await productModel.find();
  if (!products) {
    return Response.json({ message: "No products Found" }, { status: 404 });
  }
  return Response.json({ products }, { status: 200 });
}
