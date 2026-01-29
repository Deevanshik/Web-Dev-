import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    hobbies: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
