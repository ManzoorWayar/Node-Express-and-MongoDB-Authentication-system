import mongoose from "mongoose";

const UserScehma = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add your firstName"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserScehma);
export default User;
