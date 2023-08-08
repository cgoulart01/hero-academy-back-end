import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://cgoulartrj:wlmcmCFkkI8XgdqD@cluster0.eklsx9h.mongodb.net/hero-tickets"
    );
    console.log("Connect database success!");
  } catch (error) {
    console.log("🚀 - file: database.ts:5 ~~connect - error:", error);
  }
}
