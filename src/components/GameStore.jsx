import { useState } from "react";

const NAV_LINKS = ["Discovery", "Browse", "News"];

const PRODUCTS = [
  {
    id: 1,
    title: "iTunes Giftcard",
    category: "Giftcard",
    price: "NRP 800.00",
    bg: "linear-gradient(145deg, #1d6ce0 0%, #0f3c8a 100%)",
    badge: "5+",
    isItunes: true,
  },
  {
    id: 2,
    title: "Pubg Uc",
    category: "Giftcard",
    price: "NRP 1200.00",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/PUBG_Mobile.png/220px-PUBG_Mobile.png",
    bg: "linear-gradient(145deg, #78350f 0%, #1c1917 100%)",
  },
  {
    id: 3,
    title: "FreeFire Diamond",
    category: "Giftcard",
    price: "NRP 600.00",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Garena_Free_Fire_logo.png/220px-Garena_Free_Fire_logo.png",
    bg: "linear-gradient(145deg, #1e40af 0%, #0f172a 100%)",
  },
  {
    id: 4,
    title: "Valorant Giftcard",
    category: "Giftcard",
    price: "NRP 2200.00",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png",
    bg: "linear-gradient(145deg, #b91c1c 0%, #1c0505 100%)",
    badge: "25",
    logoStyle: {
      width: "80%",
      objectFit: "contain",
      filter: "drop-shadow(0 2px 12px rgba(255,70,85,0.6))",
    },
  },
];

export default function GameStore() {
  const [wishlist, setWishlist] = useState(false);
  const [activeNav, setActiveNav] = useState("Discovery");

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "'Barlow', 'Segoe UI', Tahoma, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-5 py-8">
        <nav className="flex gap-7 py-3.5 mb-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
              className="text-sm font-semibold transition-colors relative pb-0.5"
              style={{ color: activeNav === link ? "#fff" : "#888" }}
            >
              {link}

              {activeNav === link && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "#fff" }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="mb-10">
          <div
            className="relative flex rounded-3xl overflow-hidden"
            style={{
              background: "#0c0c0c",
              minHeight: 420,
            }}
          >
            <div className="relative flex-1 overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/EA_Sports_FC_24_cover_art.jpg/220px-EA_Sports_FC_24_cover_art.jpg"
                alt="EA Sports FC 24"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  filter: "brightness(0.88) saturate(1.15)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0) 35%, rgba(8,6,18,0.98) 88%)",
                }}
              />

              <div className="absolute bottom-5 left-5 flex gap-2 z-20">
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold transition hover:bg-black/80"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  ‹
                </button>

                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold transition hover:bg-black/80"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  ›
                </button>
              </div>
            </div>

            <div
              className="relative z-10 flex flex-col justify-center px-8 py-8 flex-shrink-0"
              style={{ width: 340 }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex items-center gap-2 bg-white rounded-xl px-3.5 py-2 shadow">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#000" }}
                  >
                    <span className="text-white text-[9px] font-black">
                      EA
                    </span>
                  </div>

                  <span className="font-black text-black text-base tracking-tight leading-none">
                    FC24
                  </span>
                </div>
              </div>

              <p className="text-gray-100 text-[13px] font-semibold leading-snug mb-2">
                What happens when two iconic football brands come together?
              </p>

              <p className="text-gray-400 text-xs leading-relaxed mb-1">
                A one-of-a-kind experience that takes football to places it's
                never been before.
              </p>

              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                Experience WHAT THE FC now in EA SPORTS FC™ 24.
              </p>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button className="bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition active:scale-95">
                  Buy now
                </button>

                <button
                  onClick={() => setWishlist(!wishlist)}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2.5 rounded-xl border transition-all"
                  style={{
                    borderColor: wishlist ? "#7c3aed" : "#333",
                    color: wishlist ? "#a78bfa" : "#aaa",
                    background: wishlist
                      ? "rgba(124,58,237,0.12)"
                      : "transparent",
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>

                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-12">
          <h2 className="text-[15px] font-black text-white mb-4 tracking-tight">
            Top choices
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product: p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "#181818",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)"
          : "0 2px 10px rgba(0,0,0,0.2)",
        transform: hovered
          ? "translateY(-5px) scale(1.01)"
          : "translateY(0) scale(1)",
        transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: 150,
          background: p.bg,
        }}
      >
        {p.badge && (
          <div
            className="absolute top-2.5 left-2.5 z-10 text-white text-[10px] font-black px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            {p.badge}
          </div>
        )}

        {p.isItunes ? (
          <div className="flex flex-col items-center gap-1.5 select-none">
            <svg
              viewBox="0 0 24 24"
              className="w-14 h-14 text-white"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>

            <span className="text-white font-bold text-sm tracking-[0.18em]">
              iTunes
            </span>

            <span className="text-white/70 text-[10px] tracking-[0.22em] font-medium">
              GIFT CARD
            </span>
          </div>
        ) : (
          <img
            src={p.img}
            alt={p.title}
            className="absolute inset-0 w-full h-full"
            style={
              p.id === 4
                ? {
                    objectFit: "contain",
                    padding: "20px",
                    ...(p.logoStyle || {}),
                  }
                : {
                    objectFit: "cover",
                    opacity: 0.88,
                  }
            }
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.14) 55%, rgba(255,255,255,0) 75%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        />
      </div>

      <div className="px-3.5 pt-2.5 pb-3">
        <div className="text-[10px] font-bold uppercase tracking-widest mb-0.5 text-gray-400">
          {p.category}
        </div>

        <div className="text-[13px] font-bold leading-tight text-white">
          {p.title}
        </div>

        <div className="text-[12px] font-semibold mt-0.5 text-gray-400">
          {p.price}
        </div>
      </div>
    </div>
  );
}