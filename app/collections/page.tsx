import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Studio Essentials",
    description: "Polished layers and structured separates for modern tailoring.",
    image: "/images/collection-1.svg",
  },
  {
    title: "After Hours",
    description: "Fluid silhouettes and luminous textures for nightfall.",
    image: "/images/collection-2.svg",
  },
  {
    title: "City Uniform",
    description: "Minimal palettes, elevated knitwear, and refined staples.",
    image: "/images/collection-3.svg",
  },
];

export default function CollectionsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Collections
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-900">
            Curated edits for every moment.
          </h1>
        </div>
        <Link
          href="/products"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500"
        >
          Shop products
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <div
            key={collection.title}
            className="rounded-3xl bg-white p-8 shadow-sm"
          >
            <div className="relative h-52 overflow-hidden rounded-2xl">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-zinc-900">
              {collection.title}
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              {collection.description}
            </p>
            <button className="mt-6 rounded-full border border-zinc-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
              View edit
            </button>
          </div>
        ))}
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Atelier services
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-900">
            Private styling appointments
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Schedule a one-on-one session with our stylists for personalized
            fittings.
          </p>
          <button className="mt-6 rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
