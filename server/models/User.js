import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  fullName: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  profilePic: { type: String, default: "" },
  bio: { type: String },
}, { timestamps: true }); // <-- THIS LINE ADDS createdAt and updatedAt

export default mongoose.model("User", userSchema);