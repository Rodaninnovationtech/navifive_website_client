// // import { images } from "../data";
// // import { Img } from "./Img";

// // const supply = ["Ship stores & provisions", "Technical spares & consumables", "Safety & lifesaving equipment", "Port logistics & delivery"];
// // const manpower = ["Officers & ratings", "Offshore & specialist crew", "Dry-dock & repair gangs", "Crew documentation & travel"];

// // function List({ title, items }: { title: string; items: string[] }) {
// //   return (
// //     <div>
// //       <h3 className="text-xl font-bold">{title}</h3>
// //       <ul className="mt-4 space-y-3">
// //         {items.map((i) => (
// //           <li key={i} className="flex gap-3 text-sm text-mist sm:text-base">
// //             <span className="mt-2 h-2 w-2 shrink-0 bg-signal" />
// //             {i}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export function SupplyManpower() {
// //   return (
// //     <section id="supply" className="bg-panel py-16 sm:py-20 lg:py-28">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
// //         <div className="grid items-end gap-6 lg:grid-cols-2">
// //           <div>
// //             <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">Supply &amp; manpower</p>
// //             <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
// //               The right goods and the right people, on time.
// //             </h2>
// //           </div>
// //           <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">
// //             We source what your vessel needs and supply the crew to run it, with one point of contact from request to delivery.
// //           </p>
// //         </div>

// //         <div className="mt-12 grid gap-8 lg:grid-cols-5">
// //           <Img src={images.supply} alt="Cargo and supplies" className="aspect-[16/10] w-full lg:col-span-2 lg:aspect-auto lg:h-full" />
// //           <div className="grid gap-8 bg-white p-6 sm:grid-cols-2 sm:p-10 lg:col-span-3">
// //             <List title="Supply" items={supply} />
// //             <List title="Manpower" items={manpower} />
// //             <a href="mailto:info@navifive.com"
// //               className="bg-signal px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink sm:col-span-2">
// //               Contact us
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// import { images } from "../data";
// import { Img } from "./Img";

// // ---- Image 1: core services ----
// const coreServices = [
//   {
//     t: "Spares & OEM Sourcing",
//     d: "Marine spares for engines, generators, propulsion, pumps, compressors, electrical and control systems; quotation comparison, expediting, and delivery follow-up.",
//   },
//   {
//     t: "Deck & Engine Stores",
//     d: "General stores, tools, consumables, hoses, valves, bearings, safety, and routine maintenance materials.",
//   },
//   {
//     t: "Provision Supply",
//     d: "Fresh, frozen, and dry provisions with coordinated vessel delivery and documentation support.",
//   },
//   {
//     t: "Skilled Manpower Support",
//     d: "Engineers, fitters, welders, electricians, mechanics, and riding teams, subject to applicable statutory and client approvals.",
//   },
//   {
//     t: "Ship Maintenance Jobs",
//     d: "Mechanical, electrical, hydraulic, deck, piping, steel, and planned-maintenance support onboard or ashore.",
//   },
//   {
//     t: "Logistics & Vendor Coordination",
//     d: "Sourcing, freight, customs/agent coordination, service attendance, delivery tracking, and vendor close-out.",
//   },
// ];

// // ---- Image 2: vessel & offshore capability ----
// // TODO: replace each `img` with the real photo for that vessel type
// // (e.g. import vesselOsv from "../assets/osv.jpg"). Placeholders reuse existing images.
// const vessels = [
//   { name: "OSV / PSV", img: images.about },
//   { name: "AHTS", img: images.heroWide },
//   { name: "DP-1 / DP-2", img: images.heroSmall },
//   { name: "Harbour Tugs", img: images.supply },
//   { name: "Utility / Crew Boats", img: images.about },
//   { name: "Passenger / Coastal", img: images.heroWide },
//   { name: "Tankers", img: images.heroSmall },
//   { name: "Research / Survey", img: images.supply },
//   { name: "Specialised Craft", img: images.about },
// ];

// const offshoreFocus = [
//   "DP readiness",
//   "Propulsion / Z-drive / thruster technical support",
//   "Mobilisation",
//   "Client inspections",
//   "Marine operations support",
// ];

// export function SupplyManpower() {
//   return (
//     <section id="supply" className="bg-panel py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
//         {/* ---------- CORE SERVICES ---------- */}
//         <div className="grid items-end gap-6 lg:grid-cols-2">
//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">Supply & Manpower</p>
//             <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
//               The right goods and the right people, on time.
//             </h2>
//           </div>
//           <p className="max-w-xl text-base leading-relaxed text-mist sm:text-lg">
//             We source what your vessel needs and supply the crew to run it, with one point of contact from
//             request to delivery.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
//           {coreServices.map((s) => (
//             <article key={s.t} className="bg-white p-6 sm:p-8">
//               <span className="block h-1 w-10 bg-signal" />
//               <h3 className="mt-5 text-lg font-bold text-ink sm:text-xl">{s.t}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">{s.d}</p>
//             </article>
//           ))}
//         </div>

//         {/* <div className="mt-8 flex">
//           <a
//             href="mailto:info@navifive.com"
//             className="w-full bg-signal px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink sm:w-auto"
//           >
//             Contact us
//           </a>
//         </div> */}

//         {/* ---------- VESSEL & OFFSHORE CAPABILITY ---------- */}
//         <div className="mt-20 lg:mt-28">
//           <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl xl:text-5xl">
//             Vessel &amp; Offshore Capability
//           </h2>
//           <span className="mt-4 block h-1 w-12 bg-signal" />
//           <p className="mt-5 max-w-2xl text-base text-mist sm:text-lg">
//             Support tailored to offshore, harbour, coastal, and specialized marine assets.
//           </p>

//           <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
//             {vessels.map((v) => (
//               <figure key={v.name} className="bg-white p-3 sm:p-4">
//                 <Img src={v.img} alt={v.name} className="aspect-[16/10] w-full" />
//                 <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-ink sm:text-sm">
//                   {v.name}
//                 </figcaption>
//               </figure>
//             ))}
//           </div>

//           <div className="mt-px bg-white p-4 sm:p-6">
//             <p className="text-sm leading-relaxed text-ink sm:text-base">
//               <span className="mr-3 font-bold uppercase text-radar">Offshore focus</span>
//               {offshoreFocus.map((f, i) => (
//                 <span key={f} className="font-semibold">
//                   {i > 0 && <span className="mx-2 text-signal">•</span>}
//                   {f}
//                 </span>
//               ))}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import { images } from "../data";
import { Img } from "./Img";
import supplyFirst from "../assets/SupplyManpower_first.png";
import supplySecond from "../assets/SupplyManpower_second.png";
import supplyThree from "../assets/SupplyManpower_three.png";
import supplyFour from "../assets/SupplyManpower_four.png";
import supplyFive from "../assets/SupplyManpower_five.png";
import supplySix from "../assets/SupplyManpower_six.png";
import supplySeven from "../assets/SupplyManpower_seven.png";
import supplyEight from "../assets/SupplyManpower_eight.png";
import supplyNine from "../assets/SupplyManpower_nine.png";
import supplyTen from "../assets/SupplyManpower_ten.png";
import supplyEleven from "../assets/SupplyManpower_eleven.png";

// ---- Core services (right side) ----
const coreServices = [
  {
    t: "Spares & OEM Sourcing",
    d: "Marine spares for engines, generators, propulsion, pumps, compressors, electrical and control systems; quotation comparison, expediting, and delivery follow-up.",
  },
  {
    t: "Deck & Engine Stores",
    d: "General stores, tools, consumables, hoses, valves, bearings, safety, and routine maintenance materials.",
  },
  {
    t: "Provision Supply",
    d: "Fresh, frozen, and dry provisions with coordinated vessel delivery and documentation support.",
  },
  {
    t: "Skilled Manpower Support",
    d: "Engineers, fitters, welders, electricians, mechanics, and riding teams, subject to applicable statutory and client approvals.",
  },
  {
    t: "Ship Maintenance Jobs",
    d: "Mechanical, electrical, hydraulic, deck, piping, steel, and planned-maintenance support onboard or ashore.",
  },
  {
    t: "Logistics & Vendor Coordination",
    d: "Sourcing, freight, customs/agent coordination, service attendance, delivery tracking, and vendor close-out.",
  },
];

// ---- Slider images (left side) ----
// TODO: replace with your two real photos
const slides = [
  { img: supplyFirst, label: "Supply", caption: "Spares, stores & provisions delivered to your vessel" },
  { img: supplySecond, label: "Manpower", caption: "Skilled crew and technicians ready to mobilise" },
];

// ---- Vessel & offshore capability ----
// TODO: replace each `img` with the real photo for that vessel type
// (e.g. import vesselOsv from "../assets/osv.jpg"). Placeholders reuse existing images.
const vessels = [
  { name: "OSV / PSV", img: supplyThree  },
  { name: "AHTS", img: supplyFour  },
  { name: "DP-1 / DP-2", img: supplyFive  },
  { name: "Harbour Tugs", img: supplySix  },
  { name: "Utility / Crew Boats", img: supplySeven  },
  { name: "Passenger / Coastal", img: supplyEight  },
  { name: "Tankers", img: supplyNine  },
  { name: "Research / Survey", img: supplyTen  },
  { name: "Specialised Craft", img: supplyEleven  },
];

const offshoreFocus = [
  "DP readiness",
  "Propulsion / Z-drive / thruster technical support",
  "Mobilisation",
  "Client inspections",
  "Marine operations support",
];

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <div
      className="group relative overflow-hidden bg-ink shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[4/5]">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={s.label} className="relative h-full w-full shrink-0">
              <Img
                src={s.img}
                alt={s.label}
                className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                  index === i ? "scale-110" : "scale-100"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {/* Top bar: counter */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4 sm:p-6">
          <span className="bg-signal px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
            {slides[index].label}
          </span>
          <span className="font-mono text-xs tracking-widest text-white/90">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom: caption + controls */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-6">
          <div className="max-w-xs">
            <span className="mb-3 block h-1 w-10 bg-signal" />
            <p className="text-sm font-semibold leading-snug text-white sm:text-base">
              {slides[index].caption}
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 text-white backdrop-blur transition-colors hover:bg-signal hover:border-signal sm:h-12 sm:w-12"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 text-white backdrop-blur transition-colors hover:bg-signal hover:border-signal sm:h-12 sm:w-12"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bars */}
      <div className="absolute inset-x-0 bottom-0 flex gap-1 px-0">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1 flex-1 bg-white/25"
          >
            <span
              className={`block h-full bg-signal transition-all duration-500 ${
                i === index ? "w-full" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function SupplyManpower() {
  return (
    <section id="supply" className="bg-panel py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* ---------- CORE SERVICES: slider left, content right ---------- */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: image slider */}
          <div className="lg:sticky lg:top-24">
            <ImageSlider />
          </div>

          {/* RIGHT: content */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">SUPPLY, PROCUREMENT & MANPOWER</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
              The right goods and the right people, on time.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              We source what your vessel needs and supply the crew to run it, with one point of contact from
              request to delivery.
            </p>

            <div className="mt-8 divide-y divide-line border border-line bg-white">
              {coreServices.map((s, i) => (
                <article key={s.t} className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                  <span className="font-mono text-sm font-bold text-signal sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink sm:text-lg">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist sm:text-base">{s.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- VESSEL & OFFSHORE CAPABILITY (unchanged) ---------- */}
        <div className="mt-20 lg:mt-28">
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl xl:text-5xl">
            Vessel &amp; Offshore Capability
          </h2>
          <span className="mt-4 block h-1 w-12 bg-signal" />
          <p className="mt-5 max-w-2xl text-base text-mist sm:text-lg">
            Support tailored to offshore, harbour, coastal, and specialized marine assets.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3">
            {vessels.map((v) => (
              <figure key={v.name} className="bg-white p-3 sm:p-4">
                <Img src={v.img} alt={v.name} className="aspect-[16/10] w-full" />
                <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-wide text-ink sm:text-sm">
                  {v.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-px bg-white p-4 sm:p-6">
            <p className="text-sm leading-relaxed text-ink sm:text-base">
              <span className="mr-3 font-bold uppercase text-radar">Offshore focus</span>
              {offshoreFocus.map((f, i) => (
                <span key={f} className="font-semibold">
                  {i > 0 && <span className="mx-2 text-signal">•</span>}
                  {f}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}