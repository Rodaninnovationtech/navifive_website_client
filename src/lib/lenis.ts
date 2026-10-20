import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
    if (lenis) return lenis;
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return lenis;
}

export function scrollToSection(hash: string) {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.4 });
    } else {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
}
