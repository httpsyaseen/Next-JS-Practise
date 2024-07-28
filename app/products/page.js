import ProductCard from "@/components/product-card";

export default function Products() {
  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-32 justify-center px-4">
        {[1, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2].map((_, i) => {
          return (
            <>
              <ProductCard key={i} />
            </>
          );
        })}
      </div>
    </main>
  );
}
