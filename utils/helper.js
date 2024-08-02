import connectToDatabase from "./databaseConnection";

export async function dbHandler(fn, data) {
  try {
    await connectToDatabase();
    // Return the result of fn
    return await fn(data);
  } catch (error) {
    return {
      status: "error",
      error: error.message || "Something went wrong",
    };
  }
}
