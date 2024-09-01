import { Pickcart } from "@/components/logo";
import { Button } from "./ui/button";
import { Search, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <header className="container py-4 sticky top-0 z-10 shadow-sm bg-background">
      <nav className="grid grid-cols-3">
        <div>
          <Pickcart width="130" height="32" />
        </div>

        <form className="flex rounded-md border border-input shadow-sm items-center px-3">
          <input
            type="text"
            className="w-full bg-transparent py-1 text-sm outline-0"
            placeholder="Search products..."
          />
          <Search size={16} />
        </form>

        <div className="justify-self-end">
          <Button variant="outline" size="icon" className="gap-1">
            <ShoppingCart size={15} />
          </Button>
        </div>
      </nav>
    </header>
  );
}
