import { Pickcart } from "@/components/logo";
import { Button } from "../components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* <Image src="/images/logo.png" width={200} height={20} alt="PickCart" /> */}
      <Pickcart width="200" height="50" />
      <Button>Hi there</Button>
    </main>
  );
}
