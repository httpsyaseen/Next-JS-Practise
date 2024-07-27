import MainImage from "@/public/images/b3.jpg";
import product from "@/public/images/produc.jpg";
import Link from "next/link";

import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-[1000px]">
      <section className="flex-1 relative ">
        <Image
          src={MainImage}
          alt="Hehe"
          className="opacity-90 md:max-h-[600px] lg:max-h-[700px] lg:object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-3">
          <h1 className="text-2xl   md:text-4xl font-bold text-primary/80 text-center ">
            Welcome to Peach Flask
          </h1>
          <p className="flex text-sm  md:text-xl text-center text-light">
            Experience hydration on the go with our sleek, eco-friendly bottle
            designed for everyday adventures
          </p>
        </div>
      </section>
      <section className="container mx-auto xl:px-12">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-5 justify-center items-center">
          {[1, 2, 3, 4].map((_, i) => {
            return (
              <>
                <div className="bg-light text-primary pb-2 rounded-lg shadow-lg">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product}
                      alt="hehe"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 ">
                    <h2 className="text-xl font-bold mb-2">Peach Bottle</h2>
                    <p className="text-lg font-semibold mb-4">$12</p>
                    <div className="flex flex-col md:flex-row justify-center gap-3 min-w-52">
                      <Link
                        href="#"
                        className="bg-primary text-light py-2 px-4 rounded text-center"
                      >
                        Add to Cart
                      </Link>
                      <Link
                        href="#"
                        className="bg-primary text-light py-2 px-4 rounded text-center"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
