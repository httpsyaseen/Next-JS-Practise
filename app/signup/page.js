"use client";

import { useState } from "react";
import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";
import Link from "next/link";
import { signupUser } from "@/lib/authActions";
import { notify } from "@/utils/notify";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    const { status, error = "null" } = await signupUser(formData);

    notify(status, "User Created Successfully", error || "Error Creating User");
  }

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
              Create an account
            </h1>
            <p className="text-muted-foreground mt-2">
              Fill in the details below to create a new account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>
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
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="123-456-7890"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-foreground"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St"
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
              prefetch={false}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
