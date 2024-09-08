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
      <CardContent className="relative h-[30rem] overflow-hidden">
        <Chip
          variant={inStock ? "success" : "danger"}
          text="Out of stock"
          className="absolute top-5"
        />
        <Image
          src={image || "/images/jacket.webp"}
          alt="Jacket"
          priority
          sizes="500"
          fill
          className="object-contain"
        />
      </CardContent>
      <CardFooter>
        <Link href={`/${encodeURI(name)}`}>
          <Button
            variant="outline"
            className="rounded-full backdrop-blur-md gap-2"
            title={name}
          >
            <span className="max-w-56 truncate">{name}</span>
            <small className={`bg-blue-600  px-2 rounded-full text-white`}>
              Rs {price}
            </small>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
