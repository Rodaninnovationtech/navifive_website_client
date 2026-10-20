// // // // import { images } from "../data";
// // // // import { Img } from "./Img";

// // // // const pillars = [
// // // //   { t: "Practical engineering", d: "Decisions made from the engine room up, not from a slide deck." },
// // // //   { t: "Disciplined execution", d: "Planned maintenance, dry-dock schedules and budgets that hold." },
// // // //   { t: "Transparent reporting", d: "Owners see the same numbers we do, every month." },
// // // // ];

// // // // export function About() {
// // // //   return (
// // // //     <section id="about" className="bg-panel py-16 sm:py-20 lg:py-28">
// // // //       <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
// // // //         <div className="relative">
// // // //           <Img src={images.about} alt="Vessel under way" className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[4/5]" />
// // // //           <div className="absolute -right-0 -bottom-4 bg-ink px-5 py-4 text-white sm:-right-4">
// // // //             <p className="text-3xl font-extrabold">5</p>
// // // //             <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">Minds, one course</p>
// // // //           </div>
// // // //         </div>
// // // //         <div>
// // // //           <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">About us</p>
// // // //           <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
// // // //             A maritime group built by five specialists.
// // // //           </h2>
// // // //           <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
// // // //             NAVIFIVE Maritime Group brings together technical, commercial, crewing, compliance and offshore expertise,
// // // //             so vessel owners deal with one accountable team instead of five suppliers.
// // // //           </p>
// // // //           <ul className="mt-8 divide-y divide-line border-y border-line">
// // // //             {pillars.map((p) => (
// // // //               <li key={p.t} className="py-5">
// // // //                 <h3 className="text-lg font-bold">{p.t}</h3>
// // // //                 <p className="mt-1 text-sm text-mist sm:text-base">{p.d}</p>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import { useEffect, useLayoutEffect, useRef, useState } from "react";
// // // import { images } from "../data";
// // // import { Img } from "./Img";

// // // type Step = {
// // //   label: string;      // short name on the map and tabs
// // //   title: string;      // big heading
// // //   image: string;
// // //   alt: string;
// // //   text?: string;
// // //   chips?: string[];
// // //   lines?: string[];
// // // };

// // // const steps: Step[] = [
// // //   {
// // //     label: "Vision",
// // //     title: "Vision",
// // //     image: images.about,
// // //     alt: "Vessel under way",
// // //     text: "To be recognized as a dependable maritime partner for safe, efficient, and sustainable vessel operations.",
// // //   },
// // //   {
// // //     label: "Mission",
// // //     title: "Mission",
// // //     image: images.heroWide,
// // //     alt: "Port terminal operations",
// // //     text: "To deliver practical marine solutions that protect asset reliability, compliance, and operational availability.",
// // //   },
// // //   {
// // //     label: "Values",
// // //     title: "Values",
// // //     image: images.supply,
// // //     alt: "Cargo and supplies",
// // //     chips: ["Safety", "Integrity", "Accountability", "Technical Excellence", "Partnership"],
// // //   },
// // //   {
// // //     label: "Principle",
// // //     title: "Operating Principle",
// // //     image: images.heroSmall,
// // //     alt: "Crew on deck",
// // //     lines: [
// // //       "Clear scope.",
// // //       "Safe execution.",
// // //       "Measured verification.",
// // //       "Concise reporting.",
// // //       "Timely close-out.",
// // //     ],
// // //   },
// // // ];

// // // const N = steps.length;
// // // const ROUTE = "M70 300 C150 340, 200 230, 280 250 S 400 330, 450 220 S 500 120, 540 90";

// // // function RouteMap({ progress, active, onSelect }: { progress: number; active: number; onSelect: (i: number) => void }) {
// // //   const pathRef = useRef<SVGPathElement>(null);
// // //   const [len, setLen] = useState(0);
// // //   const [ports, setPorts] = useState<{ x: number; y: number }[]>([]);

// // //   useLayoutEffect(() => {
// // //     const p = pathRef.current;
// // //     if (!p) return;
// // //     const L = p.getTotalLength();
// // //     setLen(L);
// // //     setPorts(
// // //       steps.map((_, i) => {
// // //         const pt = p.getPointAtLength((L * i) / (N - 1));
// // //         return { x: pt.x, y: pt.y };
// // //       })
// // //     );
// // //   }, []);

// // //   // ship position + heading along the route
// // //   let ship = { x: 70, y: 300, a: 0 };
// // //   const p = pathRef.current;
// // //   if (p && len) {
// // //     const d = len * progress;
// // //     const pt = p.getPointAtLength(d);
// // //     const p1 = p.getPointAtLength(Math.max(0, d - 4));
// // //     const p2 = p.getPointAtLength(Math.min(len, d + 4));
// // //     const angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
// // //     ship = { x: pt.x, y: pt.y, a: Math.max(-28, Math.min(28, angle)) };
// // //   }

// // //   return (
// // //     <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" className="h-full w-full" role="img"
// // //       aria-label="Map showing a ship travelling from Vision to Operating Principle">
// // //       <defs>
// // //         <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
// // //           <path d="M40 0H0V40" fill="none" stroke="#d3e0ef" strokeWidth="1" />
// // //         </pattern>
// // //       </defs>
// // //       <rect width="600" height="400" fill="#eaf2fb" />
// // //       <rect width="600" height="400" fill="url(#grid)" />

// // //       {/* land */}
// // //       <g fill="#d9e4f1" stroke="#c4d3e6" strokeWidth="1.5">
// // //         <path d="M0 0 H210 C190 40 150 60 110 55 C60 50 30 90 0 80 Z" />
// // //         <path d="M600 400 V250 C560 270 520 310 470 340 C430 365 400 390 380 400 Z" />
// // //         <path d="M330 70 C360 50 410 55 420 85 C430 115 390 130 355 120 C320 110 310 90 330 70 Z" />
// // //         <path d="M0 400 V330 C40 345 80 370 100 400 Z" />
// // //       </g>

// // //       {/* route: grey dashed full path + orange travelled part */}
// // //       <path ref={pathRef} d={ROUTE} fill="none" stroke="#9fb3cc" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" />
// // //       {len > 0 && (
// // //         <path d={ROUTE} fill="none" stroke="#ff4500" strokeWidth="3.5" strokeLinecap="round"
// // //           strokeDasharray={len} strokeDashoffset={len - len * progress} />
// // //       )}

// // //       {/* ports */}
// // //       {ports.map((pt, i) => {
// // //         const on = i === active;
// // //         const reached = progress >= i / (N - 1) - 0.001;
// // //         return (
// // //           <g key={steps[i].label} onClick={() => onSelect(i)} className="cursor-pointer">
// // //             <circle cx={pt.x} cy={pt.y} r={on ? 14 : 0} fill="#ff4500" opacity="0.18" />
// // //             <circle cx={pt.x} cy={pt.y} r="8" fill={reached ? "#ff4500" : "#fff"} stroke={reached ? "#ff4500" : "#0b1221"} strokeWidth="2.5" />
// // //             <text x={pt.x} y={pt.y + 28} textAnchor={i === N - 1 ? "end" : "middle"}
// // //               fontSize="13" fontFamily="'Space Mono', monospace" letterSpacing="1.5"
// // //               fill={on ? "#0b1221" : "#5b6b82"} fontWeight={on ? 700 : 400}>
// // //               {steps[i].label.toUpperCase()}
// // //             </text>
// // //           </g>
// // //         );
// // //       })}

// // //       {/* ship */}
// // //       <g transform={`translate(${ship.x} ${ship.y}) rotate(${ship.a})`}>
// // //         <g transform="translate(0 -9) scale(1.4)">
// // //           <path d="M-20 -2 H20 L14 8 H-14 Z" fill="#0b1221" />
// // //           <rect x="-15" y="-10" width="8" height="8" fill="#ff4500" />
// // //           <rect x="-6" y="-10" width="8" height="8" fill="#0891b2" />
// // //           <rect x="3" y="-10" width="8" height="8" fill="#ff4500" />
// // //           <rect x="12" y="-15" width="6" height="13" fill="#fff" stroke="#0b1221" strokeWidth="1.2" />
// // //         </g>
// // //       </g>
// // //     </svg>
// // //   );
// // // }

// // // export function About() {
// // //   const outerRef = useRef<HTMLElement>(null);
// // //   const [progress, setProgress] = useState(0);
// // //   const active = Math.round(progress * (N - 1));

// // //   // scroll progress 0 → 1 while the section is pinned
// // //   useEffect(() => {
// // //     let raf = 0;
// // //     const update = () => {
// // //       raf = 0;
// // //       const el = outerRef.current;
// // //       if (!el) return;
// // //       const range = el.offsetHeight - window.innerHeight;
// // //       const p = range > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
// // //       setProgress((prev) => (Math.abs(prev - p) < 0.0005 ? prev : p));
// // //     };
// // //     const onScroll = () => {
// // //       if (!raf) raf = requestAnimationFrame(update);
// // //     };
// // //     update();
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     window.addEventListener("resize", onScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", onScroll);
// // //       window.removeEventListener("resize", onScroll);
// // //       if (raf) cancelAnimationFrame(raf);
// // //     };
// // //   }, []);

// // //   const goTo = (i: number) => {
// // //     const el = outerRef.current;
// // //     if (!el) return;
// // //     const top = el.getBoundingClientRect().top + window.scrollY;
// // //     const range = el.offsetHeight - window.innerHeight;
// // //     window.scrollTo({ top: top + (range * i) / (N - 1), behavior: "smooth" });
// // //   };

// // //   return (
// // //     <section id="about" ref={outerRef} className="relative h-[360vh] bg-panel">
// // //       <div className="sticky top-16 h-[calc(100vh-4rem)] lg:top-20 lg:h-[calc(100vh-5rem)]">
// // //         <div className="mx-auto grid h-full max-w-7xl grid-rows-[38%_1fr] gap-4 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-10 lg:py-8">
// // //           {/* LEFT: map + changing image */}
// // //           <div className="flex min-h-0 flex-col gap-4">
// // //             <div className="min-h-0 flex-1 overflow-hidden border border-line bg-[#eaf2fb] lg:flex-[1.15]">
// // //               <RouteMap progress={progress} active={active} onSelect={goTo} />
// // //             </div>
// // //             <div className="relative hidden min-h-0 flex-1 overflow-hidden border border-line bg-white lg:block">
// // //               {steps.map((s, i) => (
// // //                 <div key={s.label}
// // //                   className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
// // //                   <Img src={s.image} alt={s.alt} className="h-full w-full" />
// // //                 </div>
// // //               ))}
// // //               <span className="absolute bottom-0 left-0 bg-signal px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white">
// // //                 {steps[active].title}
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT: heading + content that changes */}
// // //           <div className="flex min-h-0 flex-col">
// // //             <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">About us</p>
// // //             <p className="mt-2 max-w-md text-sm text-mist sm:text-base">
// // //               NAVIFIVE Maritime Group: five specialists, one accountable team.
// // //             </p>

// // //             <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-3">
// // //               {steps.map((s, i) => (
// // //                 <button key={s.label} onClick={() => goTo(i)}
// // //                   className={`border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:text-[11px] ${
// // //                     i === active ? "border-signal text-ink" : "border-transparent text-mist hover:text-ink"
// // //                   }`}>
// // //                   {s.label}
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             <div className="relative min-h-0 flex-1">
// // //               {steps.map((s, i) => (
// // //                 <div key={s.label} aria-hidden={i !== active}
// // //                   className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
// // //                     i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
// // //                   }`}>
// // //                   <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
// // //                     {s.title}
// // //                     <span className="text-signal">.</span>
// // //                   </h2>

// // //                   {s.text && (
// // //                     <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">{s.text}</p>
// // //                   )}

// // //                   {s.chips && (
// // //                     <ul className="mt-6 flex max-w-xl flex-wrap gap-2 sm:gap-3">
// // //                       {s.chips.map((c) => (
// // //                         <li key={c} className="border border-ink px-3 py-2 text-sm font-bold sm:px-4 sm:text-base">
// // //                           {c}
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   )}

// // //                   {s.lines && (
// // //                     <ul className="mt-6 max-w-xl divide-y divide-line border-y border-line">
// // //                       {s.lines.map((l) => (
// // //                         <li key={l} className="py-2.5 text-lg font-bold sm:py-3 sm:text-xl">{l}</li>
// // //                       ))}
// // //                     </ul>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import { useEffect, useRef, useState } from "react";
// // import { images } from "../data";
// // import { Img } from "./Img";

// // type Step = {
// //   label: string;
// //   title: string;
// //   image: string;
// //   alt: string;
// //   text?: string;
// //   chips?: string[];
// //   lines?: string[];
// // };

// // const steps: Step[] = [
// //   {
// //     label: "Vision",
// //     title: "Vision",
// //     image: images.about,
// //     alt: "Vessel under way",
// //     text: "To be recognized as a dependable maritime partner for safe, efficient, and sustainable vessel operations.",
// //   },
// //   {
// //     label: "Mission",
// //     title: "Mission",
// //     image: images.heroWide,
// //     alt: "Port terminal operations",
// //     text: "To deliver practical marine solutions that protect asset reliability, compliance, and operational availability.",
// //   },
// //   {
// //     label: "Values",
// //     title: "Values",
// //     image: images.supply,
// //     alt: "Cargo and supplies",
// //     chips: ["Safety", "Integrity", "Accountability", "Technical Excellence", "Partnership"],
// //   },
// //   {
// //     label: "Principle",
// //     title: "Operating Principle",
// //     image: images.heroSmall,
// //     alt: "Crew on deck",
// //     lines: [
// //       "Clear scope.",
// //       "Safe execution.",
// //       "Measured verification.",
// //       "Concise reporting.",
// //       "Timely close-out.",
// //     ],
// //   },
// // ];

// // const N = steps.length;

// // export function About() {
// //   const outerRef = useRef<HTMLElement>(null);
// //   const [progress, setProgress] = useState(0);
// //   const active = Math.min(N - 1, Math.round(progress * (N - 1)));

// //   // scroll progress 0 → 1 while the section is pinned
// //   useEffect(() => {
// //     let raf = 0;
// //     const update = () => {
// //       raf = 0;
// //       const el = outerRef.current;
// //       if (!el) return;
// //       const range = el.offsetHeight - window.innerHeight;
// //       const p = range > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
// //       setProgress((prev) => (Math.abs(prev - p) < 0.0005 ? prev : p));
// //     };
// //     const onScroll = () => {
// //       if (!raf) raf = requestAnimationFrame(update);
// //     };
// //     update();
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     window.addEventListener("resize", onScroll);
// //     return () => {
// //       window.removeEventListener("scroll", onScroll);
// //       window.removeEventListener("resize", onScroll);
// //       if (raf) cancelAnimationFrame(raf);
// //     };
// //   }, []);

// //   const goTo = (i: number) => {
// //     const el = outerRef.current;
// //     if (!el) return;
// //     const top = el.getBoundingClientRect().top + window.scrollY;
// //     const range = el.offsetHeight - window.innerHeight;
// //     window.scrollTo({ top: top + (range * i) / (N - 1), behavior: "smooth" });
// //   };

// //   return (
// //     <section id="about" ref={outerRef} className="relative h-[360vh] bg-panel">
// //       <div className="sticky top-16 h-[calc(100vh-4rem)] lg:top-20 lg:h-[calc(100vh-5rem)]">
// //         <div className="mx-auto grid h-full max-w-7xl grid-rows-[40%_1fr] gap-4 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-10 lg:py-8">
// //           {/* LEFT: full image that changes */}
// //           <div className="relative min-h-0 overflow-hidden border border-line bg-white">
// //             {steps.map((s, i) => (
// //               <div key={s.label}
// //                 className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
// //                 <Img src={s.image} alt={s.alt} className="h-full w-full" />
// //               </div>
// //             ))}
// //             <span className="absolute bottom-0 left-0 bg-signal px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white">
// //               {steps[active].title}
// //             </span>
// //             {/* scroll progress bar */}
// //             <span aria-hidden className="absolute bottom-0 left-0 h-1 bg-signal/70"
// //               style={{ width: `${progress * 100}%` }} />
// //           </div>

// //           {/* RIGHT: heading + content that changes */}
// //           <div className="flex min-h-0 flex-col">
// //             <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">About us</p>
// //             <p className="mt-2 max-w-md text-sm text-mist sm:text-base">
// //               NAVIFIVE Maritime Group: five specialists, one accountable team.
// //             </p>

// //             <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-3">
// //               {steps.map((s, i) => (
// //                 <button key={s.label} onClick={() => goTo(i)}
// //                   className={`border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:text-[11px] ${
// //                     i === active ? "border-signal text-ink" : "border-transparent text-mist hover:text-ink"
// //                   }`}>
// //                   {s.label}
// //                 </button>
// //               ))}
// //             </div>

// //             <div className="relative min-h-0 flex-1">
// //               {steps.map((s, i) => (
// //                 <div key={s.label} aria-hidden={i !== active}
// //                   className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
// //                     i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
// //                   }`}>
// //                   <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
// //                     {s.title}
// //                     <span className="text-signal">.</span>
// //                   </h2>

// //                   {s.text && (
// //                     <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">{s.text}</p>
// //                   )}

// //                   {s.chips && (
// //                     <ul className="mt-6 flex max-w-xl flex-wrap gap-2 sm:gap-3">
// //                       {s.chips.map((c) => (
// //                         <li key={c} className="border border-ink px-3 py-2 text-sm font-bold sm:px-4 sm:text-base">
// //                           {c}
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   )}

// //                   {s.lines && (
// //                     <ul className="mt-6 max-w-xl divide-y divide-line border-y border-line">
// //                       {s.lines.map((l) => (
// //                         <li key={l} className="py-2.5 text-lg font-bold sm:py-3 sm:text-xl">{l}</li>
// //                       ))}
// //                     </ul>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import { useEffect, useRef, useState } from "react";
// import { images } from "../data";
// import { Img } from "./Img";
// import aboutOne from "../assets/about_one.png";
// import aboutTwo from "../assets/about_two.png";
// import aboutThree from "../assets/about_three.png";
// import aboutFourth from "../assets/about_fourth.png";
// import aboutFivth from "../assets/about_fivth.png";

// type Step = {
//   label: string;
//   title: string;
//   image: string;
//   alt: string;
//   text?: string;
//   chips?: string[];
//   lines?: string[];
//   items?: { heading: string; body: string }[];
// };

// const steps: Step[] = [
//   {
//     label: "Vision",
//     title: "Vision",
//     image: aboutOne,
//     alt: "Vessel under way",
//     text: "To be recognized as a dependable maritime partner for safe, efficient, and sustainable vessel operations.",
//   },
//   {
//     label: "Mission",
//     title: "Mission",
//     image: aboutTwo,
//     alt: "Port terminal operations",
//     text: "To deliver practical marine solutions that protect asset reliability, compliance, and operational availability.",
//   },
//   {
//     label: "Values",
//     title: "Values",
//     image: aboutThree,
//     alt: "Cargo and supplies",
//     chips: ["Safety", "Integrity", "Accountability", "Technical Excellence", "Partnership"],
//   },
//   {
//     label: "Principle",
//     title: "Operating Principle",
//     image: aboutFourth,
//     alt: "Crew on deck",
//     lines: [
//       "Clear scope.",
//       "Safe execution.",
//       "Measured verification.",
//       "Concise reporting.",
//       "Timely close-out.",
//     ],
//   },
//   {
//     label: "Services",
//     title: "Services",
//     image: aboutFivth,
//     alt: "Marine technical services",
//     items: [
//       {
//         heading: "Technical Ship Management",
//         body: "PMS and defect control, machinery performance monitoring, OPEX/CAPEX follow-up, repair planning, budget tracking, and owner reporting.",
//       },
//       {
//         heading: "Takeover & Mobilisation",
//         body: "Condition assessment, machinery trials, document review, defect listing, mobilisation/demobilisation planning, and readiness follow-up.",
//       },
//       {
//         heading: "Dry-Docking & Repairs",
//         body: "Specification preparation, yard coordination, class attendance, cost control, sea trials, and documented close-out.",
//       },
//       {
//         heading: "Machinery Troubleshooting",
//         body: "Main/auxiliary engines, propulsion, Z-drives, thrusters, pumps, compressors, electrical and control systems using OEM data where available.",
//       },
//       {
//         heading: "Pre-Purchase Surveys",
//         body: "Independent technical assessment of machinery, hull, equipment, and certification with risk and CAPEX indication.",
//       },
//       {
//         heading: "Marine Projects",
//         body: "Fabrication, piping, steel renewals, riding-squad coordination, specialist attendance, and project execution support.",
//       },
//     ],
//   },
// ];

// const N = steps.length;

// export function About() {
//   const outerRef = useRef<HTMLElement>(null);
//   const [progress, setProgress] = useState(0);
//   const active = Math.min(N - 1, Math.round(progress * (N - 1)));

//   // scroll progress 0 → 1 while the section is pinned
//   useEffect(() => {
//     let raf = 0;
//     const update = () => {
//       raf = 0;
//       const el = outerRef.current;
//       if (!el) return;
//       const range = el.offsetHeight - window.innerHeight;
//       const p = range > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
//       setProgress((prev) => (Math.abs(prev - p) < 0.0005 ? prev : p));
//     };
//     const onScroll = () => {
//       if (!raf) raf = requestAnimationFrame(update);
//     };
//     update();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       if (raf) cancelAnimationFrame(raf);
//     };
//   }, []);

//   const goTo = (i: number) => {
//     const el = outerRef.current;
//     if (!el) return;
//     const top = el.getBoundingClientRect().top + window.scrollY;
//     const range = el.offsetHeight - window.innerHeight;
//     window.scrollTo({ top: top + (range * i) / (N - 1), behavior: "smooth" });
//   };

//   return (
//     <section
//       id="about"
//       ref={outerRef}
//       className="relative bg-panel"
//       style={{ height: `${N * 90}vh` }}
//     >
//       <div className="sticky top-16 h-[calc(100vh-4rem)] lg:top-20 lg:h-[calc(100vh-5rem)]">
//         <div className="mx-auto grid h-full max-w-7xl grid-rows-[40%_1fr] gap-4 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-10 lg:py-8">
//           {/* LEFT: full image that changes */}
//           <div className="relative min-h-0 overflow-hidden border border-line bg-white">
//             {steps.map((s, i) => (
//               <div
//                 key={s.label}
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                   i === active ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <Img src={s.image} alt={s.alt} className="h-full w-full" />
//               </div>
//             ))}
//             <span className="absolute bottom-0 left-0 bg-signal px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white">
//               {steps[active].title}
//             </span>
//             {/* scroll progress bar */}
//             <span
//               aria-hidden
//               className="absolute bottom-0 left-0 h-1 bg-signal/70"
//               style={{ width: `${progress * 100}%` }}
//             />
//           </div>

//           {/* RIGHT: heading + content that changes */}
//           <div className="flex min-h-0 flex-col">
//             <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">About us</p>
//             <p className="mt-2 max-w-md text-sm text-mist sm:text-base">
//               NAVIFIVE Maritime Group: five specialists, one accountable team.
//             </p>

//             <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-3">
//               {steps.map((s, i) => (
//                 <button
//                   key={s.label}
//                   onClick={() => goTo(i)}
//                   className={`border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:text-[11px] ${
//                     i === active
//                       ? "border-signal text-ink"
//                       : "border-transparent text-mist hover:text-ink"
//                   }`}
//                 >
//                   {s.label}
//                 </button>
//               ))}
//             </div>

//             <div className="relative min-h-0 flex-1">
//               {steps.map((s, i) => (
//                 <div
//                   key={s.label}
//                   aria-hidden={i !== active}
//                   className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
//                     i === active
//                       ? "translate-y-0 opacity-100"
//                       : "pointer-events-none translate-y-6 opacity-0"
//                   }`}
//                 >
//                   <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
//                     {s.title}
//                     <span className="text-signal">.</span>
//                   </h2>

//                   {s.text && (
//                     <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
//                       {s.text}
//                     </p>
//                   )}

//                   {s.chips && (
//                     <ul className="mt-6 flex max-w-xl flex-wrap gap-2 sm:gap-3">
//                       {s.chips.map((c) => (
//                         <li
//                           key={c}
//                           className="border border-ink px-3 py-2 text-sm font-bold sm:px-4 sm:text-base"
//                         >
//                           {c}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {s.lines && (
//                     <ul className="mt-6 max-w-xl divide-y divide-line border-y border-line">
//                       {s.lines.map((l) => (
//                         <li key={l} className="py-2.5 text-lg font-bold sm:py-3 sm:text-xl">
//                           {l}
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   {s.items && (
//                     <div className="mt-5 grid max-h-full max-w-2xl grid-cols-1 gap-px overflow-y-auto border border-line bg-line sm:grid-cols-2">
//                       {s.items.map((it) => (
//                         <div key={it.heading} className="bg-white p-3 sm:p-4">
//                           <h3 className="text-sm font-bold text-ink sm:text-base">
//                             {it.heading}
//                           </h3>
//                           <p className="mt-1 text-xs leading-snug text-mist sm:text-sm">
//                             {it.body}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef, useState } from "react";
import aboutOne from "../assets/about_one.png";
import aboutTwo from "../assets/about_two.png";
import aboutThree from "../assets/about_three.png";
import aboutFourth from "../assets/about_fourth.png";
import aboutFivth from "../assets/about_fivth.png";

type Step = {
  label: string;
  title: string;
  image: string;
  alt: string;
  text?: string;
  chips?: string[];
  lines?: string[];
  items?: { heading: string; body: string }[];
};

const steps: Step[] = [
  {
    label: "Vision",
    title: "Vision",
    image: aboutOne,
    alt: "Vessel under way",
    text: "To be recognized as a dependable maritime partner for safe, efficient, and sustainable vessel operations.",
  },
  {
    label: "Mission",
    title: "Mission",
    image: aboutTwo,
    alt: "Port terminal operations",
    text: "To deliver practical marine solutions that protect asset reliability, compliance, and operational availability.",
  },
  {
    label: "Values",
    title: "Values",
    image: aboutThree,
    alt: "Cargo and supplies",
    chips: ["Safety", "Integrity", "Accountability", "Technical Excellence", "Partnership"],
  },
  {
    label: "Principle",
    title: "Operating Principle",
    image: aboutFourth,
    alt: "Crew on deck",
    lines: [
      "Clear scope.",
      "Safe execution.",
      "Measured verification.",
      "Concise reporting.",
      "Timely close-out.",
    ],
  },
  {
    label: "Services",
    title: "Services",
    image: aboutFivth,
    alt: "Marine technical services",
    items: [
      {
        heading: "Technical Ship Management",
        body: "PMS and defect control, machinery performance monitoring, OPEX/CAPEX follow-up, repair planning, budget tracking, and owner reporting.",
      },
      {
        heading: "Takeover & Mobilisation",
        body: "Condition assessment, machinery trials, document review, defect listing, mobilisation/demobilisation planning, and readiness follow-up.",
      },
      {
        heading: "Dry-Docking & Repairs",
        body: "Specification preparation, yard coordination, class attendance, cost control, sea trials, and documented close-out.",
      },
      {
        heading: "Machinery Troubleshooting",
        body: "Main/auxiliary engines, propulsion, Z-drives, thrusters, pumps, compressors, electrical and control systems using OEM data where available.",
      },
      {
        heading: "Pre-Purchase Surveys",
        body: "Independent technical assessment of machinery, hull, equipment, and certification with risk and CAPEX indication.",
      },
      {
        heading: "Marine Projects",
        body: "Fabrication, piping, steel renewals, riding-squad coordination, specialist attendance, and project execution support.",
      },
    ],
  },
];

const N = steps.length;

export function About() {
  const outerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const active = Math.min(N - 1, Math.round(progress * (N - 1)));

  // scroll progress 0 → 1 while the section is pinned
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = outerRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
      setProgress((prev) => (Math.abs(prev - p) < 0.0005 ? prev : p));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (i: number) => {
    const el = outerRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (range * i) / (N - 1), behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={outerRef}
      className="relative bg-panel"
      style={{ height: `${N * 90}vh` }}
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] lg:top-20 lg:h-[calc(100vh-5rem)]">
        <div className="mx-auto grid h-full max-w-7xl grid-rows-[40%_1fr] gap-4 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:px-10 lg:py-8">
          {/* LEFT: full image that changes (never cropped) */}
          <div className="relative flex min-h-0 items-center justify-center overflow-hidden border border-line bg-[#0b1a33]">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="h-full w-full object-contain object-center"
                  draggable={false}
                />
              </div>
            ))}

            <span className="absolute bottom-0 left-0 bg-signal px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white">
              {steps[active].title}
            </span>

            {/* scroll progress bar */}
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-1 bg-signal/70"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* RIGHT: heading + content that changes */}
          <div className="flex min-h-0 flex-col">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">About us</p>
            <p className="mt-2 max-w-md text-sm text-mist sm:text-base">
              NAVIFIVE Maritime Group: five specialists, one accountable team.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-3">
              {steps.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => goTo(i)}
                  className={`border-b-2 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors sm:text-[11px] ${
                    i === active
                      ? "border-signal text-ink"
                      : "border-transparent text-mist hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="relative min-h-0 flex-1">
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ${
                    i === active
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-6 opacity-0"
                  }`}
                >
                  <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl xl:text-6xl">
                    {s.title}
                    <span className="text-signal">.</span>
                  </h2>

                  {s.text && (
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
                      {s.text}
                    </p>
                  )}

                  {s.chips && (
                    <ul className="mt-6 flex max-w-xl flex-wrap gap-2 sm:gap-3">
                      {s.chips.map((c) => (
                        <li
                          key={c}
                          className="border border-ink px-3 py-2 text-sm font-bold sm:px-4 sm:text-base"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.lines && (
                    <ul className="mt-6 max-w-xl divide-y divide-line border-y border-line">
                      {s.lines.map((l) => (
                        <li key={l} className="py-2.5 text-lg font-bold sm:py-3 sm:text-xl">
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.items && (
                    <div className="mt-5 grid max-h-full max-w-2xl grid-cols-1 gap-px overflow-y-auto border border-line bg-line sm:grid-cols-2">
                      {s.items.map((it) => (
                        <div key={it.heading} className="bg-white p-3 sm:p-4">
                          <h3 className="text-sm font-bold text-ink sm:text-base">
                            {it.heading}
                          </h3>
                          <p className="mt-1 text-xs leading-snug text-mist sm:text-sm">
                            {it.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}