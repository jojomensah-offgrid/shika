import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { signIn } from "@/auth";
import OauthButtons from "../_components/oauth-buttons";
export default function Component() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-1/2 bg-gray-100">
          <Image
            src="/shika.svg"
            alt="Login visual"
            width={1080}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Login
              </CardTitle>
              <CardDescription className="text-center">
                Choose your preferred login method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action={async (formData) => {
                  "use server";
                  await signIn("resend", formData);
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Sign in with Email
                </Button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <OauthButtons />
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                  Sign up
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
