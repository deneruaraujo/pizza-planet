import { ProductCard } from "../components/product/ProductCard";
import storeItems from '@/server.json'

export default function Home() {
  return (
    <main>
      <section className="mx-10 my-10 flex flex-wrap justify-center gap-20">
        {storeItems.products.map(item => (
          <ProductCard key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}
