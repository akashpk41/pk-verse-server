import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },

    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },

    nativeLanguage: {
      type: String,
      default: "",
    },

    learningLanguage: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    isOnboarded: {
      type: Boolean,
      default: false,
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// pre hook, hash the user password before save to the database;
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
 
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    console.log(`Error in User Pre Hook`, err);
  }
});

const User = model("User", userSchema);
export default User;
