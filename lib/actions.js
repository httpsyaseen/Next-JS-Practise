"use server";
import Product from "@/models/product";
import { dbHandler } from "@/utils/helper";

export const createProduct = (data) =>
  dbHandler(async (data) => {
    const product = await Product.create(data);

    return {
      status: "success",
      data: JSON.stringify(product),
    };
  }, data);

export const getAllProducts = () =>
  dbHandler(async () => {
    const products = await Product.find().exec();

    return {
      status: "success",
      data: products,
    };
  });
