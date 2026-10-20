// import { useState } from "react";
// import { navLinks } from "../data";
// import navifivelogo from "../assets/navifive_logo.png";

// export function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">


//         <a href="#home" className="flex items-center gap-3" aria-label="NAVIFIVE Maritime Group - home">
//           <img
//             src={navifivelogo}
//             alt="NAVIFIVE logo"
//             className="h-10 w-auto object-contain sm:h-11 lg:h-12"
//           />
         
//           <span className="leading-none">
//             <span className="block text-lg font-extrabold tracking-tight text-[#12366B]">
//               NAVIFIVE
//             </span>

//             <span className="mt-1 block font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#147F83]">
//               SHIP MANAGEMENT PVT. LTD.
//             </span>

//             <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#12366B]">
//               FIVE MINDS. ONE COURSE.
//             </span>
//           </span>
//         </a>

//         <nav className="hidden items-center gap-6 md:flex xl:gap-10" aria-label="Main">
//           {navLinks.map((l) => (
//             <a key={l.href} href={l.href}
//               className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist transition-colors hover:text-signal xl:text-xs">
//               {l.label}
//             </a>
//           ))}
//         </nav>

//         <a href="#contact"
//           className="hidden bg-signal px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink md:inline-block">
//           Contact
//         </a>

//         <button className="grid h-10 w-10 place-items-center md:hidden" aria-label="Toggle menu"
//           aria-expanded={open} onClick={() => setOpen(!open)}>
//           <span className="space-y-1.5">
//             <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
//             <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
//             <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
//           </span>
//         </button>
//       </div>

//       {open && (
//         <nav className="border-t border-line bg-white px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
//           {navLinks.map((l) => (
//             <a key={l.href} href={l.href} onClick={() => setOpen(false)}
//               className="block border-b border-line py-4 font-mono text-xs uppercase tracking-[0.22em] text-ink">
//               {l.label}
//             </a>
//           ))}
//           <a href="#contact" onClick={() => setOpen(false)}
//             className="mt-5 block bg-signal px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white">
//             Contact
//           </a>
//         </nav>
//       )}
//     </header>
//   );
// }



import { useEffect, useState } from "react";
import { navLinks } from "../data";
import navifivelogo from "../assets/navifive_logo.png";

// all section ids to watch (navLinks + contact, since Contact is a button)
const SECTION_IDS = [...navLinks.map((l) => l.href.replace("#", "")), "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      // line just below the sticky header; the last section whose top has passed it is "active"
      const line = window.innerHeight * 0.3;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      // at the very bottom of the page, force the last section
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = SECTION_IDS[SECTION_IDS.length - 1];

      setActive(current);
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

  const isActive = (href: string) => active === href.replace("#", "");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="NAVIFIVE Maritime Group - home">
          <img
            src={navifivelogo}
            alt="NAVIFIVE logo"
            className="h-10 w-auto object-contain sm:h-11 lg:h-12"
          />

          <span className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-[#12366B]">
              NAVIFIVE
            </span>

            <span className="mt-1 block font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#147F83]">
              SHIP MANAGEMENT PVT. LTD.
            </span>

            <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#12366B]">
              FIVE MINDS. ONE COURSE.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex xl:gap-10" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`border-b-2 pb-1 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:text-signal xl:text-xs ${
                isActive(l.href)
                  ? "border-signal text-signal"
                  : "border-transparent text-mist"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink md:inline-block ${
            active === "contact" ? "bg-ink" : "bg-signal"
          }`}
        >
          Contact
        </a>

        <button
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line py-4 font-mono text-xs uppercase tracking-[0.22em] ${
                isActive(l.href) ? "text-signal" : "text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-5 block px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white ${
              active === "contact" ? "bg-ink" : "bg-signal"
            }`}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}