import { createProduct } from "@/lib/actions";

export default function Product() {
  return (
    <div className="container mx-auto mt-24">
      <h1 className="heading text-center text-primary">Create Product</h1>
      <form action={createProduct}>
        <div className="  flex flex-col gap-10 mx-auto mt-6">
          <div className=" flex gap-4 items-center justify-center ">
            <label className="text-xl font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <div className=" flex gap-4 items-center justify-center ">
            <label className="text-xl font-semibold" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <div className=" flex gap-4 items-center justify-center ">
            <label className="text-xl font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary rounded-md  mx-auto"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
