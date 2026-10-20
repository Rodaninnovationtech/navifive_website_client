import { Logo } from "./Logo";
import { navLinks } from "../data";
import { scrollToSection } from "../lib/scroll";
import footerTeam from "../assets/footer-team.jpeg";
import navifivelogo from "../assets/navifive_logo.png";

// Contact is added to the footer list only (the navbar already has a Contact button).
const FOOTER_LINKS = [...navLinks, { label: "Contact", href: "#contact" }];

export function Footer() {
  return (
    <footer data-testid="footer-root" className="relative overflow-hidden border-t border-line bg-slate-50">
      <div className="mx-auto max-w-[1600px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
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
              
            </div>
            {/* <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
              47-7-22/9, FF 202, Yerramsetty Plaza, Dwaraka Nagar 4th Lane, Revenue Ward 15, Visakhapatnam, Andhra Pradesh, India
            </p>
            <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#12366B]">
              website: www.navifiveshipmanagement.com
            </span> */}
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-mist">Site</p>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    onClick={() => scrollToSection(l.href)}
                    className="font-mono text-xs uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-signal"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-mist">Home ports</p>
             <p className="mt-6 max-w-xs text-sm leading-relaxed text-signal">
              47-7-22/9, FF 202, Yerramsetty Plaza, Dwaraka Nagar 4th Lane, Revenue Ward 15, Visakhapatnam, Andhra Pradesh, India
            </p>
            <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#12366B]">
              website: www.navifiveshipmanagement.com
            </span>
          </div>
        </div>

        <div className="mt-16 select-none overflow-hidden md:mt-24" aria-hidden>
          <div
            className="text-image whitespace-nowrap font-display text-[19vw] font-black uppercase leading-[0.8] tracking-tight"
            style={{ backgroundImage: `url(${footerTeam})` }}
          >
            Navifive
          </div>
        </div>

        {/* <div className="mt-10 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist md:flex-row">
          <span data-testid="footer-copyright">© 2026 Navifive Maritime Group</span>
          <span>Duty phone +31 10 555 0187 — always answered</span>
        </div> */}
      </div>
    </footer>
  );
}