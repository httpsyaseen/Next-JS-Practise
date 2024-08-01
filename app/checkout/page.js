import Image from "next/image";
import productImage from "@/public/images/produc.jpg";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 py-12 px-4 md:px-6 ">
      <div className="w-full md:w-[480px] lg:w-[560px] space-y-6">
        <div className="border border-gray-200 rounded-lg shadow-sm bg-light">
          <div className="bg-light border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-primary">
              Order Summary
            </h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={productImage}
                    width={64}
                    height={64}
                    alt="Product Image"
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">Acme Hoodie</h3>
                    <p className="text-sm text-gray-500">Size: M</p>
                  </div>
                </div>
                <div className="font-medium">$49.99</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={productImage}
                    width={64}
                    height={64}
                    alt="Product Image"
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">Acme T-Shirt</h3>
                    <p className="text-sm text-gray-500">Size: L</p>
                  </div>
                </div>
                <div className="font-medium">$29.99</div>
              </div>
              <hr className="border-t border-gray-300" />
              <div className="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>$79.98</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[480px] lg:w-[560px] space-y-6">
        <div className="border border-gray-200 rounded-lg shadow-sm bg-light">
          <div className="bg-light border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-primary">Checkout</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="First and Last Name"
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                placeholder="1234 Main St, Anytown USA"
                rows={3}
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="payment"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Method
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value="card"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-300 bg-light p-4 cursor-pointer hover:bg-gray-100 peer-checked:border-primary peer-checked:bg-light peer-checked:text-primary"
                  >
                    <CreditCardIcon className="mb-3 h-6 w-6 text-gray-600" />
                    Card
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-300 bg-light p-4 cursor-pointer hover:bg-gray-100 peer-checked:border-primary peer-checked:bg-light peer-checked:text-primary"
                  >
                    <WalletCardsIcon className="mb-3 h-6 w-6 text-gray-600" />
                    Wallet
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="apple"
                    name="payment"
                    value="apple"
                    className="sr-only peer"
                  />
                  <label
                    htmlFor="apple"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-gray-300 bg-light p-4 cursor-pointer hover:bg-gray-100 peer-checked:border-primary peer-checked:bg-light peer-checked:text-primary"
                  >
                    <DollarSignIcon className="mb-3 h-6 w-6 text-gray-600" />
                    Cash
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light border-t border-gray-200 p-4">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
    </svg>
  );
}
