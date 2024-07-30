"use server";
import Product from "@/models/product";
import db from "./connection";

export async function createProduct(formData) {
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  await db();
  const product = await Product.create(data);
  console.log(product);
}
