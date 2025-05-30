import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  if (isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'maxbeton'
    });
    isConnected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}
