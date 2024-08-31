import { Product } from "@/components/product";
import { request } from "@/lib/request";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function Home() {
  const response = await request("/products?limit=12");
  const products: Product[] = await response.json();

  return (
    <main className="container h-full">
      <section className="grid grid-cols-3 gap-4 h-full mt-4">
        {/* <Product featured={true} name="Black Puffert Jacket" price={12000} /> */}
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.title}
            price={product.price}
            // image={product.image}
            // inStock={false}
          />
        ))}
      </section>
    </main>
  );
}
