import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    name: "Silk Sateen Wrap Dress",
    detail: "Champagne · Limited",
    price: "$248",
    image: "/images/silksateenwrap.png",
  },
  {
    name: "Structured Linen Blazer",
    detail: "Sandstone",
    price: "$310",
    image: "/images/blazer.png",
  },
  {
    name: "Relaxed Pleated Trouser",
    detail: "Obsidian",
    price: "$180",
    image: "/images/trouser.png",
  },
];

const editorialTiles = [
  "Soft tailoring",
  "Layered neutrals",
  "Warm textures",
  "Clean lines",
  "Monochrome edits",
  "After-hours silhouettes",
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
            New collection · autumn 2024
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
            A refined wardrobe for modern city life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Atelier Noire delivers elevated essentials, crafted silhouettes, and
            statement layers designed to move with you from day to night.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Shop the drop
            </Link>
            <Link
              href="/collections"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700"
            >
              View lookbook
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-zinc-500">
            <div>
              <p className="text-2xl font-semibold text-zinc-900">120+</p>
              <p>Seasonal styles</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900">24h</p>
              <p>City delivery</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900">98%</p>
              <p>Five-star fit</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative h-80 overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="/images/top-banner.png"
              alt="Monochrome editorial styling"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-zinc-900/40" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-200">
                Atelier edit
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                The monochrome capsule
              </h2>
              <p className="mt-3 text-sm text-zinc-200">
                Sharp lines, sculpted silhouettes, and soft layering in deep
                black and charcoal.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] uppercase text-zinc-100">
                {editorialTiles.map((tile) => (
                  <span
                    key={tile}
                    className="rounded-full border border-white/30 px-3 py-1 text-center"
                  >
                    {tile}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Atelier atelier
              </p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                Designed in New York
              </h3>
              <p className="mt-3 text-sm text-zinc-500">
                Limited-run garments and elevated staples curated by our in-house
                studio.
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Netlify hosting
              </p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                Fast storefront launch
              </h3>
              <p className="mt-3 text-sm text-zinc-500">
                Optimized for static deployment with a clean, responsive layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Featured
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
              The Autumn Wardrobe
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-900"
          >
            Browse all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{product.detail}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-base font-semibold text-zinc-900">
                  {product.price}
                </span>
                <button className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-white p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Atelier approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Crafted with precision and purpose.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Each garment is made with responsibly sourced textiles, refined
              draping, and purposeful detail. We focus on timeless palettes and
              balanced proportions to simplify styling.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Responsible sourcing",
              "Studio tailoring",
              "Seasonal palettes",
              "Polished finishes",
            ].map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-600"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 rounded-3xl bg-zinc-900 px-10 py-12 text-white md:grid-cols-[1.3fr,0.7fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300">
            Private access
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Join the Atelier Circle
          </h2>
          <p className="mt-4 text-sm text-zinc-300">
            Receive early access to drops, styling notes, and private showroom
            appointments.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-zinc-400"
            placeholder="Email address"
            type="email"
          />
          <button className="rounded-full bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900">
            Request invite
          </button>
        </div>
      </section>
    </div>
  );
}
