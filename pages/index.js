import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-grow">
      <p>Home</p>
    </section>
  );
}
