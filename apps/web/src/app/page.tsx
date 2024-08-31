import { Product } from "@/components/product";

export default function Home() {
  return (
    <main className="container h-full">
      <section className="grid grid-cols-3 gap-4 h-full mt-4">
        <Product featured={true} name="Black Puffert Jacket" price="12,000" />
        <Product name="Black Puffert Jacket" price="12,000" inStock={false} />
        <Product name="Black Puffert Jacket" price="12,000" />
        <Product name="Black Puffert Jacket" price="12,000" inStock={false} />
        <Product name="Black Puffert Jacket" price="12,000" />
        <Product name="Black Puffert Jacket" price="12,000" />
        <Product name="Black Puffert Jacket" price="12,000" />
        <Product name="Black Puffert Jacket" price="12,000" />
      </section>
    </main>
  );
}
