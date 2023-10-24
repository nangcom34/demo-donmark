import Navbar from "./layouts/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex items-center justify-center w-full max-w-screen-2xl mx-auto">
        {" "}
        <Image
          src="/images/home.png"
          alt="home"
          width={1920}
          height={1080}
          className="w-full h-full object-fill object-center"
        />
      </section>
      <section className="flex items-center justify-center w-full max-w-screen-2xl mx-auto">
        {" "}
        <Image
          src="/images/home1.png"
          alt="home"
          width={1920}
          height={1080}
          className="w-full h-full object-fill object-center"
        />
      </section>
      <section className="flex items-center justify-center w-full max-w-screen-2xl mx-auto">
        {" "}
        <Image
          src="/images/home2.png"
          alt="home"
          width={1920}
          height={1080}
          className="w-full h-full object-fill object-center"
        />
      </section>
    </main>
  );
}
