import ScrollAnimation from "./scroll-animation";
import Image from "next/image";
import Link from "next/link";
import product from "@/public/images/produc.jpg";

export default function ProductCard() {
  return (
    <ScrollAnimation animationClass="animate-zoomIn">
      <div className=" text-center text-primary shadow-xl max-w-[240px] md:rounded-md  ">
        <Image
          src={product}
          alt="hehe"
          height="192"
          width="202"
          className="object-cover w-full h-48 md:rounded-t-md"
        />
        <div className="pb-4 pt-3">
          <h2 className="ps-2 text-md md:text-xl font-bold mb-0 md:mb-2 ">
            Peach Bottle
          </h2>
          <p className="ps-2 text-sm md:text-lg font-semibold mb-4">$12</p>
          <div className="hidden md:flex flex-col md:flex-row justify-center gap-3">
            <Link
              href="#"
              className="bg-primary text-light py-2 text-center rounded flex justify-center px-2"
            >
              Add to Cart
            </Link>
            <Link
              href="#"
              className="bg-primary text-light py-2 text-center rounded flex justify-center px-2"
            >
              Buy Now
            </Link>
          </div>
          <Link
            href={"/"}
            className="bg-primary text-light flex rounded-md items-center justify-center mx-1 py-[2px] md:hidden"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
