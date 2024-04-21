import mongoose, { Schema, models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  }, { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
