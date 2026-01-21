import Image from "next/image";
import Link from "next/link";

const cartItems = [
  {
    name: "Sculpted Knit Tank",
    detail: "Obsidian · Size S",
    price: "$98",
    image: "/images/product-3.svg",
  },
  {
    name: "Structured Linen Blazer",
    detail: "Sandstone · Size M",
    price: "$310",
    image: "/images/product-5.svg",
  },
];

export default function CartPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Cart
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-900">
            Ready to check out?
          </h1>
        </div>
        <Link
          href="/products"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500"
        >
          Continue shopping
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">{item.detail}</p>
                </div>
              </div>
              <div className="text-sm font-semibold text-zinc-900">
                {item.price}
              </div>
            </div>
          ))}
          <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-500">
            This cart is a frontend-only preview. Checkout flows will connect to
            your ecommerce platform.
          </div>
        </div>
        <aside className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between text-sm text-zinc-600">
            <span>Subtotal</span>
            <span className="font-semibold text-zinc-900">$408</span>
          </div>
          <div className="flex items-center justify-between text-sm text-zinc-600">
            <span>Shipping</span>
            <span className="font-semibold text-zinc-900">$0</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold text-zinc-900">
            <span>Total</span>
            <span>$408</span>
          </div>
          <button className="w-full rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Proceed to checkout
          </button>
          <p className="text-xs text-zinc-500">
            Secure payments powered by your preferred commerce provider.
          </p>
        </aside>
      </div>
    </div>
  );
}
