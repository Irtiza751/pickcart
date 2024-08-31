import Image from "next/image";
import { Button } from "./ui/button";

interface ProductProps {
  featured?: boolean;
  name: string;
  price: number;
  image?: string;
  inStock?: boolean;
}

export function Product({
  featured = false,
  name,
  image,
  price,
  inStock = true,
}: ProductProps) {
  return (
    <article
      className={`border border-input p-5 rounded-lg ${
        featured ? "col-span-2" : ""
      } relative h-[30rem] group`}
    >
      <Image
        src={image || "/images/jacket.webp"}
        alt="Jacket"
        objectFit="contain"
        loading="lazy"
        sizes="100%"
        fill
        className="group-hover:scale-105 ease-in duration-200"
      />

      <div className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full border border-input bg-background shadow-sm px-4 py-1">
        <small>{inStock ? "In stock" : "Out of stock"}</small>
        <span
          className={`w-2 h-2 ${
            inStock ? "bg-green-500" : "bg-red-500"
          } rounded-full`}
        />
      </div>

      <div className="absolute bottom-5 left-5 w-full">
        <Button
          variant="outline"
          className="rounded-full backdrop-blur-md gap-2"
        >
          <span className="max-w-56 text-ellipsis overflow-hidden">{name}</span>
          <small className={`bg-blue-600  px-2 rounded-full text-white`}>
            Rs {price}
          </small>
        </Button>
      </div>
    </article>
  );
}
