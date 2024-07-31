import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/lib/actions";

export const revalidate = 5;

export default async function Products() {
  const { data, error = null } = await getAllProducts();

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-32 justify-center px-4">
        {data.map((product, i) => {
          return (
            <>
              <ProductCard key={i} product={product} />
            </>
          );
        })}
      </div>
    </main>
  );
}
