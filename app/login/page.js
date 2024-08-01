import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-[91dvh]">
      <div className="hidden lg:block w-7/12 relative">
        <Image
          src={ProductImage}
          alt="Login Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      <div className="w-full lg:w-5/12 flex items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Sign in to your account
            </h1>
            <p className="text-muted-foreground mt-2">
              Enter your email and password below to access your account.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
              prefetch={false}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
