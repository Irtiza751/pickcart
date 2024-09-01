import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Card className="max-w-lg w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Register your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-3">
            <label htmlFor="username" className="text-sm block">
              Username
            </label>
            <Input
              name="useranme"
              id="username"
              placeholder="Enter you username"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="email" className="text-sm block">
              Email
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter you email"
            />
          </div>
          <div className="space-y-3">
            <label htmlFor="password" className="text-sm flex justify-between">
              Password
              <Link className="underline" href="/">
                Forgot password?
              </Link>
            </label>
            <Input name="password" id="password" placeholder="Enter password" />
          </div>

          <Button className="w-full">Login</Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" size="lg" className="w-full space-x-2">
          <Image src="/images/google.svg" alt="Google" width={18} height={18} />
          <span>Continue with Google</span>
        </Button>
        <Link href="/login" className="underline">
          Already have an account
        </Link>
      </CardFooter>
    </Card>
  );
}
