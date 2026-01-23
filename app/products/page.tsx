import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Cropped Utility Jacket",
    category: "Outerwear",
    price: "$295",
    href: "/products/cropped-utility-jacket",
    image: "/images/Cropped Utility Jacket (Outerwear).png",
  },
  {
    name: "Bias Cut Slip Dress",
    category: "Dresses",
    price: "$210",
    href: "/products/bias-cut-slip-dress",
    image: "/images/Bias Cut Slip Dress (Dresses).png",
  },
  {
    name: "Sculpted Knit Tank",
    category: "Essentials",
    price: "$98",
    href: "/products/sculpted-knit-tank",
    image: "/images/Sculpted Knit Tank (Essentials).png",
  },
  {
    name: "Wide-Leg Trousers",
    category: "Bottoms",
    price: "$185",
    href: "/products/wide-leg-trousers",
    image: "/images/Wide-Leg Trousers (Bottoms).png",
  },
  {
    name: "Silk Blend Blouse",
    category: "Tops",
    price: "$165",
    href: "/products/silk-blend-blouse",
    image: "/images/Silk Blend Blouse (Tops).png",
  },
  {
    name: "Leather Belted Skirt",
    category: "Accessories",
    price: "$220",
    href: "/products/leather-belted-skirt",
    image: "/images/Leather Belted Skirt (Accessories).png",
  },
];

const filters = [
  {
    label: "Type",
    options: [
      "All",
      "New arrivals",
      "Outerwear",
      "Tailoring",
      "Knitwear",
      "Dresses",
      "Accessories",
    ],
  },
  {
    label: "Size",
    options: ["All", "XS", "S", "M", "L", "XL"],
  },
  {
    label: "Color",
    options: ["All", "Obsidian", "Ivory", "Sandstone", "Slate", "Midnight"],
  },
  {
    label: "Sort by",
    options: ["Featured", "Newest", "Price: Low to High", "Price: High to Low"],
  },
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
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Filters
            </p>
            <span className="rounded-full bg-zinc-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              All
            </span>
          </div>
          <div className="mt-6 flex flex-col gap-4 text-sm text-zinc-600">
            {filters.map((filter) => (
                <details
                key={filter.label}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  <span>{filter.label}</span>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    All
                  </span>
                </summary>
                <div className="mt-3">
                  <select className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm focus:border-zinc-400 focus:outline-none">
                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </details>
            ))}
          </div>
        </aside>

        <section className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-44 overflow-hidden rounded-2xl bg-zinc-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
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
