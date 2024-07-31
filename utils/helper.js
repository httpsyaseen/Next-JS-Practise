import db from "@/lib/connection";

export async function dbHandler(fn, data, id) {
  try {
    await db();
    return await fn(data, id);
  } catch (error) {
    return {
      status: "error",
      error: error.message || "Something went Wrong",
    };
  }
}
