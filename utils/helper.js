import db from "@/lib/connection";

export async function dbHandler(fn, data) {
  try {
    await db();
    // Return the result of fn
    return await fn(data);
  } catch (error) {
    return {
      status: "error",
      error: error.message || "Something went wrong",
    };
  }
}
