"use server";

import { dbHandler } from "@/utils/helper";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function signupUser(data) {
  // Ensure dbHandler returns the result of the function
  return dbHandler(async (data) => {
    const { email, password } = data;
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        status: "error",
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      ...data,
      password: hashedPassword,
    });
    await user.save();

    return {
      status: "success",
    };
  }, data);
}
