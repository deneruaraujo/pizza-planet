import { ProductCard } from "../components/product/ProductCard";

export default function Home() {
  return (
    <main>
      <section className="mx-10 my-10 flex flex-wrap justify-center gap-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
