"use server";
import Product from "@/models/product";
import { dbHandler } from "@/utils/helper";

export const createProduct = (data) =>
  dbHandler(async (data) => {
    const product = await Product.create(data);
    return {
      status: "success",
    };
  }, data);

export const getAllProducts = () =>
  dbHandler(async () => {
    console.log("Products function called", Date.now() / 1000);
    const products = await Product.find().exec();
    return {
      status: "success",
      data: products,
    };
  });
