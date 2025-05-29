import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  if (isConnected) {
    console.log("Already connected");
    return;
  } else {
    try {
      mongoose.connect(process.env.MongoURI).then(() => {
        isConnected = true;
        console.log("connected to Db");
      })
    } catch (error) {
      console.log("Error connecting to Db", error);
    }

  }
}