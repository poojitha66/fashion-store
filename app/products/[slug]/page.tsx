import Image from "next/image";
import Link from "next/link";

const productDetails = {
  "cropped-utility-jacket": {
    name: "Cropped Utility Jacket",
    price: "$295",
    description:
      "A structured jacket with refined hardware, designed to layer effortlessly over knits and dresses.",
    image: "/images/Cropped Utility Jacket (Outerwear).png",
  },
  "bias-cut-slip-dress": {
    name: "Bias Cut Slip Dress",
    price: "$210",
    description:
      "Fluid drape with a soft sheen, finished with adjustable straps and a slim silhouette.",
    image: "/images/Bias Cut Slip Dress (Dresses).png",
  },
  "sculpted-knit-tank": {
    name: "Sculpted Knit Tank",
    price: "$98",
    description:
      "A second-skin knit with smoothing ribbing and a clean neckline, perfect for layering.",
    image: "/images/Sculpted Knit Tank (Essentials).png",
  },
  "wide-leg-trousers": {
    name: "Wide-Leg Trousers",
    price: "$185",
    description:
      "Tailored with a modern rise and crisp front pleats for an effortless, elongated line.",
    image: "/images/Wide-Leg Trousers (Bottoms).png",
  },
  "silk-blend-blouse": {
    name: "Silk Blend Blouse",
    price: "$165",
    description:
      "Lightweight blouse with a subtle sheen and relaxed drape to balance structured looks.",
    image: "/images/Silk Blend Blouse (Tops).png",
  },
  "leather-belted-skirt": {
    name: "Leather Belted Skirt",
    price: "$220",
    description:
      "Supple leather skirt with tonal belt detailing and a soft A-line profile.",
    image: "/images/Leather Belted Skirt (Accessories).png",
  },
};

type ProductSlug = keyof typeof productDetails;

type PageProps = {
  params: { slug: ProductSlug };
};

export default function ProductPage({ params }: PageProps) {
  const product = productDetails[params.slug];

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Product not found
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
          We could not find that style.
        </h1>
        <Link
          href="/products"
          className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <div className="relative h-80 overflow-hidden rounded-3xl bg-zinc-50"></div>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`preview-${index}`}
                className="relative h-24 overflow-hidden rounded-2xl bg-zinc-50"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} preview ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 18vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Atelier Noire
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-zinc-600">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold text-zinc-900">
              {product.price}
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              In stock
            </span>
          </div>
          <div className="mt-8 space-y-4 rounded-3xl border border-zinc-200 bg-white p-6">
            <div className="flex items-center justify-between text-sm text-zinc-600">
              <span>Size</span>
              <span className="font-semibold text-zinc-900">XS / S / M / L</span>
            </div>
            <div className="flex items-center justify-between text-sm text-zinc-600">
              <span>Color</span>
              <span className="font-semibold text-zinc-900">Obsidian</span>
            </div>
            <div className="flex items-center justify-between text-sm text-zinc-600">
              <span>Fabric</span>
              <span className="font-semibold text-zinc-900">Italian blend</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Add to cart
            </button>
            <Link
              href="/products"
              className="rounded-full border border-zinc-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-700"
            >
              Continue shopping
            </Link>
          </div>
          <div className="mt-10 rounded-2xl bg-zinc-50 p-6 text-sm text-zinc-600">
            Complimentary shipping over $200 · Free returns within 14 days.
          </div>
        </div>
      </div>
    </div>
  );
}
