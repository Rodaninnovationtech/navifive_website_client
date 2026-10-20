// // const services = [
// //   { t: "Technical ship management", d: "Planned maintenance, inspections, spares and day-to-day technical supervision of your fleet." },
// //   { t: "Dry-docking & repairs", d: "Specification, yard selection, tender and on-site supervision from arrival to delivery." },
// //   { t: "Offshore operations", d: "Support for offshore units and vessels, from mobilisation to operational reporting." },
// //   { t: "Owner reporting", d: "Clear monthly reports on condition, cost and compliance, with no surprises." },
// //   { t: "Class & compliance", d: "Surveys, audits and statutory certificates tracked and renewed ahead of expiry." },
// //   { t: "Voyage & fleet support", d: "Round-the-clock technical desk for breakdowns, port-state issues and urgent decisions." },
// // ];

// // export function CoreServices() {
// //   return (
// //     <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
// //         <div className="max-w-2xl">
// //           <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">Core services</p>
// //           <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
// //             Everything a vessel needs to stay on course.
// //           </h2>
// //         </div>

// //         <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
// //           {services.map((s) => (
// //             <article key={s.t} className="group bg-white p-6 transition-colors hover:bg-ink hover:text-white sm:p-8">
// //               <span className="block h-1 w-10 bg-signal transition-all group-hover:w-20" />
// //               <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
// //               <p className="mt-3 text-sm leading-relaxed text-mist group-hover:text-white/70 sm:text-base">{s.d}</p>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import { ArrowUpRight, Ship, Hammer, Anchor, FileText, ShieldCheck, Radar } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { FadeUp } from "./Reveal";
// import { IMAGES } from "../data/content";
// import { scrollToSection } from "../lib/lenis";

// type Service = {
//     id: string;
//     t: string;
//     d: string;
//     icon: LucideIcon;
//     img?: string;
//     span: string;
//     tall?: boolean;
//     wide?: boolean;
// };

// const services: Service[] = [
//     {
//         id: "s1",
//         t: "Technical ship management",
//         d: "Planned maintenance, inspections, spares and day-to-day technical supervision of your fleet.",
//         icon: Ship,
//         img: IMAGES.serviceCrewing,
//         span: "lg:col-span-7",
//         tall: true,
//     },
//     {
//         id: "s2",
//         t: "Dry-docking & repairs",
//         d: "Specification, yard selection, tender and on-site supervision from arrival to delivery.",
//         icon: Hammer,
//         img: IMAGES.serviceRepair,
//         span: "lg:col-span-5",
//         tall: true,
//     },
//     {
//         id: "s3",
//         t: "Offshore operations",
//         d: "Support for offshore units and vessels, from mobilisation to operational reporting.",
//         icon: Anchor,
//         img: IMAGES.serviceOffshore,
//         span: "lg:col-span-4",
//     },
//     {
//         id: "s4",
//         t: "Owner reporting",
//         d: "Clear monthly reports on condition, cost and compliance, with no surprises.",
//         icon: FileText,
//         img: IMAGES.servicePort,
//         span: "lg:col-span-4",
//     },
//     {
//         id: "s5",
//         t: "Class & compliance",
//         d: "Surveys, audits and statutory certificates tracked and renewed ahead of expiry.",
//         icon: ShieldCheck,
//         img: IMAGES.serviceShipbuilding,
//         span: "lg:col-span-4",
//     },
//     // {
//     //     id: "s6",
//     //     t: "Voyage & fleet support",
//     //     d: "Round-the-clock technical desk for breakdowns, port-state issues and urgent decisions.",
//     //     icon: Radar,
//     //     img: IMAGES.serviceLogistics,
//     //     span: "lg:col-span-12",
//     //     wide: true,
//     // },
// ];








import { ArrowUpRight, Hammer, Radar, Users, Anchor, Container } from "lucide-react";
import { FadeUp } from "./Reveal";
import { SERVICES } from "../data/content";
import { scrollToSection } from "../lib/lenis";

const ICONS = [Hammer, Radar, Users, Anchor, Container, Radar];

export function CoreServices() {
    return (
        <section id="services" data-testid="services-section" className="relative mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <FadeUp>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">02 / Services</p>
                        <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                            From drydock <br className="hidden md:block" />
                            to <span className="text-signal">deepwater.</span>
                        </h2>
                    </FadeUp>
                </div>
                <FadeUp delay={0.15} className="lg:col-span-4">
                    <p className="max-w-xs text-sm leading-relaxed text-mist md:ml-auto">
                        Six disciplines, one accountable partner. Hover any discipline to see where the work happens.
                    </p>
                </FadeUp>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12">
                {SERVICES.map((s, i) => {
                    const Icon = ICONS[i];
                    return (
                        <FadeUp
                            key={s.id}
                            delay={(i % 3) * 0.08}
                            className={`${s.span} ${s.tall ? "min-h-[420px]" : "min-h-[300px]"} h-full`}
                            testId={`service-card-${s.id}`}
                        >
                            <article
                                data-testid={`service-card-inner-${s.id}`}
                                className="group relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-panel/40 p-7 transition-colors duration-500 hover:border-signal md:p-10"
                            >
                                {s.img && (
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                                        <img
                                            src={s.img}
                                            alt=""
                                            className="h-full w-full object-cover grayscale contrast-125"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-abyss/55" />
                                    </div>
                                )}

                                <div className="relative flex items-start justify-between">
                                    <Icon className="h-6 w-6 text-radar" strokeWidth={1.5} />
                                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
                                        S/0{i + 1}
                                    </span>
                                </div>

                                <div className="relative mt-16">
                                    <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight transition-colors duration-500 group-hover:text-signal md:text-3xl">
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 max-w-md text-sm leading-relaxed text-mist transition-colors duration-500 group-hover:text-signal">
                                        {s.body}
                                    </p>
                                    {s.wide && (
                                        <svg viewBox="0 0 900 80" className="mt-8 hidden w-full md:block" aria-hidden>
                                            <path
                                                d="M20 60 C 220 10, 420 70, 620 30 S 820 20, 880 40"
                                                fill="none"
                                                stroke="#00E5FF"
                                                strokeWidth="1.5"
                                                strokeDasharray="6 8"
                                                className="route-dash"
                                            />
                                            <circle cx="20" cy="60" r="4" fill="#FF4500" />
                                            <circle cx="450" cy="47" r="4" fill="#00E5FF" />
                                            <circle cx="880" cy="40" r="4" fill="#FF4500" />
                                            <text x="24" y="44" fill="#8A97A8" fontSize="11" fontFamily="JetBrains Mono">RTM</text>
                                            <text x="436" y="30" fill="#8A97A8" fontSize="11" fontFamily="JetBrains Mono">SIN</text>
                                            <text x="848" y="26" fill="#8A97A8" fontSize="11" fontFamily="JetBrains Mono">HOU</text>
                                        </svg>
                                    )}
                                    <button
                                        data-testid={`service-cta-${s.id}`}
                                        onClick={() => scrollToSection("#contact")}
                                        className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foam/80 transition-colors hover:text-signal"
                                    >
                                        Brief us
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </article>
                        </FadeUp>
                    );
                })}
            </div>
        </section>
    );
}