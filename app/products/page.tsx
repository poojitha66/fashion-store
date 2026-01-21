import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Cropped Utility Jacket",
    category: "Outerwear",
    price: "$295",
    href: "/products/cropped-utility-jacket",
    image: "/images/product-1.svg",
  },
  {
    name: "Bias Cut Slip Dress",
    category: "Dresses",
    price: "$210",
    href: "/products/bias-cut-slip-dress",
    image: "/images/product-2.svg",
  },
  {
    name: "Sculpted Knit Tank",
    category: "Essentials",
    price: "$98",
    href: "/products/sculpted-knit-tank",
    image: "/images/product-3.svg",
  },
  {
    name: "Wide-Leg Trousers",
    category: "Bottoms",
    price: "$185",
    href: "/products/wide-leg-trousers",
    image: "/images/product-4.svg",
  },
  {
    name: "Silk Blend Blouse",
    category: "Tops",
    price: "$165",
    href: "/products/silk-blend-blouse",
    image: "/images/product-5.svg",
  },
  {
    name: "Leather Belted Skirt",
    category: "Accessories",
    price: "$220",
    href: "/products/leather-belted-skirt",
    image: "/images/product-6.svg",
  },
];

const filters = [
  "New arrivals",
  "Outerwear",
  "Tailoring",
  "Knitwear",
  "Dresses",
  "Accessories",
];

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Products
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-900">
            Everyday essentials, elevated.
          </h1>
        </div>
        <div className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          42 styles · Autumn 24
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[240px,1fr]">
        <aside className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Filters
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-600">
            {filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center justify-between rounded-full border border-zinc-200 px-4 py-2"
              >
                <span>{filter}</span>
                <input type="checkbox" className="h-3 w-3" />
              </label>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-500">
            Filters are frontend-only for this static preview.
          </div>
        </aside>

        <section className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    {product.category}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-zinc-900">
                    {product.name}
                  </h2>
                </div>
                <span className="text-sm font-semibold text-zinc-900">
                  {product.price}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">
                Premium textiles, modern proportions, and effortless layering.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                View details →
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
