import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function page({ params }: { params: { productId: string } }) {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-5 md:grid-cols-5">
        <div className="col-span-3">
          <Image
            className="sticky top-10"
            src="/images/jacket.webp"
            alt="Jacket"
            width={800}
            height={800}
            priority
          />
        </div>
        <div className="py-4 px-6 col-span-2">
          <h2 className="text-4xl font-semibold mb-3">
            {decodeURI(params.productId)}
          </h2>

          <h4 className="text-lg bg-blue-500 inline-block px-3 py-1 rounded-full mb-3">
            Rs 1800
          </h4>

          <div className="space-x-2 my-4">
            <Badge variant="secondary">SM</Badge>
            <Badge variant="secondary">LG</Badge>
            <Badge variant="secondary">XL</Badge>
            <Badge variant="secondary">2XL</Badge>
          </div>

          <ul className="space-y-2 list-disc list-inside">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nihil
              perspiciatis pariatur ex. Impedit harum quasi pariatur nemo,
              consequuntur recusandae.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              aliquam omnis accusamus, ad ex veritatis dolore iure cupiditate at
              maxime nihil. Pariatur fugiat eaque veniam!
            </li>
          </ul>

          <Button size="lg" className="w-full mt-6 gap-2">
            <ShoppingBag size={17} />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
