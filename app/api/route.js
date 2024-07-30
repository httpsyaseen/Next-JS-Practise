import db from "@/lib/connection";
import Product from "../products/addproduct/page";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, description, price } = await req.json();

  console.log(name, description, price);
  return new NextResponse("ok");
}
