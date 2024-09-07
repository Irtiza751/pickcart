import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Chip } from "./ui/chip";
import Link from "next/link";

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
    <Card className={featured ? "col-span-2" : ""}>
      <CardContent className="relative h-[30rem]">
        <Chip
          variant={inStock ? "success" : "danger"}
          text="Out of stock"
          className="absolute top-5"
        />
        <Image
          className="group-hover:scale-105 ease-in duration-200 object-cover"
          src={image || "/images/jacket.webp"}
          alt="Jacket"
          sizes="500"
          fill
          priority
        />
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="rounded-full backdrop-blur-md gap-2"
        >
          <Link href={`/${encodeURI(name)}`}>
            <span className="max-w-56 text-ellipsis overflow-hidden">
              {name}
            </span>
            <small className={`bg-blue-600  px-2 rounded-full text-white`}>
              Rs {price}
            </small>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
