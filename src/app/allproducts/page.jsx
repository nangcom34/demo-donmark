import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../layouts/Navbar";

const AllProducts = () => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-wrap items-center justify-evenly gap-4 md:gap-y-20 my-5">
        <Link href="#" className="block w-[150px] sm:w-[219px] md:w-[300px]">
          <Image
            src="/images/product.png"
            alt="home"
            width={1920}
            height={1080}
            className=" h-44 sm:h-64 w-full object-cover md:h-80 "
          />
          <p className="mt-1 font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            name product....
          </p>
        </Link>
        <Link href="#" className="block w-[150px] sm:w-[219px] md:w-[300px]">
          <Image
            src="/images/product.png"
            alt="home"
            width={1920}
            height={1080}
            className=" h-44 sm:h-64 w-full object-cover md:h-80 "
          />
          <p className="mt-1 font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            name product....
          </p>
        </Link>
        <Link href="#" className="block w-[150px] sm:w-[219px] md:w-[300px]">
          <Image
            src="/images/product.png"
            alt="home"
            width={1920}
            height={1080}
            className=" h-44 sm:h-64 w-full object-cover md:h-80 "
          />
          <p className="mt-1 font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            name product....
          </p>
        </Link>
        <Link href="#" className="block w-[150px] sm:w-[219px] md:w-[300px]">
          <Image
            src="/images/product.png"
            alt="home"
            width={1920}
            height={1080}
            className=" h-44 sm:h-64 w-full object-cover md:h-80 "
          />
          <p className="mt-1 font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            name product....
          </p>
        </Link>
        <Link href="#" className="block w-[150px] sm:w-[219px] md:w-[300px]">
          <Image
            src="/images/product.png"
            alt="home"
            width={1920}
            height={1080}
            className=" h-44 sm:h-64 w-full object-cover md:h-80 "
          />
          <p className="mt-1 font-bold text-xs sm:text-sm md:text-md lg:text-lg">
            name product....
          </p>
        </Link>
      </section>
    </main>
  );
};

export default AllProducts;
