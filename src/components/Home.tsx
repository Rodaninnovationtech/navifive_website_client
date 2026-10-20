// // import { images } from "../data";
// // import { Img } from "./Img";

// // const stats = [
// //   { n: "5", l: "Marine disciplines" },
// //   { n: "24/7", l: "Owner support" },
// //   { n: "Global", l: "Vessel coverage" },
// // ];

// // /*
// //   Banner = "mosaic" layout (no slider):
// //   text block on the left, a collage of 4 differently-shaped photos on the right
// //   with a floating info card. On sm/md the collage drops below the text.
// // */
// // export function Home() {
// //   return (
// //     <section id="home" className="relative overflow-hidden bg-white">
// //       {/* light blueprint grid */}
// //       <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.5]"
// //         style={{ backgroundImage: "linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "linear-gradient(to bottom,black,transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom,black,transparent 85%)" }} />

// //       <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-24">
// //         {/* CONTENT */}
// //         <div className="lg:col-span-6 xl:col-span-6">
// //           <p className="hero-in font-mono text-[11px] uppercase tracking-[0.35em] text-radar sm:text-xs">
// //             Five minds. One course.
// //           </p>
// //           <h1 className="hero-in hero-in-2 mt-5 text-[2.6rem] font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5.4rem]">
// //             Your trusted partner
// //             <span className="text-outline block">for marine</span>
// //             solutions<span className="text-signal">.</span>
// //           </h1>
// //           <p className="hero-in hero-in-3 mt-7 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg md:text-xl">
// //             Practical engineering • Disciplined execution • Transparent owner reporting. Delivering technical ship
// //             management, dry-docking excellence, and offshore operations tailored for vessel owners worldwide.
// //           </p>
// //           <div className="hero-in hero-in-3 mt-9 flex flex-col gap-3 sm:flex-row">
// //             <a href="#services" className="bg-signal px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink">
// //               Our Core Services
// //             </a>
// //             <a href="#about" className="border border-ink px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-white">
// //               About Us
// //             </a>
// //           </div>

// //           <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
// //             {stats.map((s) => (
// //               <div key={s.l}>
// //                 <dt className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.n}</dt>
// //                 <dd className="mt-1 text-xs leading-snug text-mist sm:text-sm">{s.l}</dd>
// //               </div>
// //             ))}
// //           </dl>
// //         </div>

// //         {/* MOSAIC BANNER */}
// //         <div className="relative lg:col-span-6 xl:col-span-6">
// //           <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[420px] sm:h-[520px] md:h-[600px] lg:h-[560px] xl:h-[640px]">
// //             {/* tall arch */}
// //             <div className="col-span-3 row-span-4 overflow-hidden rounded-t-[999px] bg-panel">
// //               <Img src={images.heroMain} alt="Container vessel at sea" className="h-full w-full" />
// //             </div>
// //             {/* wide */}
// //             <div className="col-span-3 row-span-2 overflow-hidden bg-panel">
// //               <Img src={images.heroWide} alt="Port terminal operations" className="h-full w-full" />
// //             </div>
// //             {/* circle */}
// //             <div className="col-span-3 row-span-2 overflow-hidden rounded-full bg-panel">
// //               <Img src={images.heroRound} alt="Ship at anchor" className="h-full w-full" />
// //             </div>
// //             {/* square, orange block */}
// //             <div className="col-span-2 row-span-2 grid place-items-center bg-signal p-3 text-center text-white">
// //               <span className="font-mono text-[10px] uppercase tracking-[0.25em] sm:text-xs">Est. for owners worldwide</span>
// //             </div>
// //             <div className="col-span-4 row-span-2 overflow-hidden bg-panel">
// //               <Img src={images.heroSmall} alt="Crew on deck" className="h-full w-full" />
// //             </div>
// //           </div>

// //           {/* floating card */}
// //           <div className="absolute -bottom-5 left-3 max-w-[16rem] border border-line bg-white p-4 shadow-xl sm:left-[-1rem] sm:p-5 lg:left-[-2rem]">
// //             <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-radar">Technical ship management</p>
// //             <p className="mt-2 text-sm font-medium leading-snug">Dry-docking, offshore ops and crewing under one roof.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// import { Img } from "./Img";
// import bannerOne from "../assets/banner_image_first.png";
// import bannerSecond from "../assets/banner_image_second.jpeg";


// /*
//   Banner = two overlapping photos (no slider).
//   lg/xl: text left, photos right.  sm/md: photos drop below the text.
// */
// export function Home() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-white">
//       {/* light blueprint grid */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{ backgroundImage: "linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "linear-gradient(to bottom,black,transparent 85%)", WebkitMaskImage: "linear-gradient(to bottom,black,transparent 85%)" }} />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-24">
//         {/* CONTENT */}
//         <div className="lg:col-span-6">
//           <p className="hero-in font-mono text-[11px] uppercase tracking-[0.35em] text-radar sm:text-xs">
//             Five minds. One course.
//           </p>
//           <h1 className="hero-in hero-in-2 mt-5 text-[2.6rem] font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5.4rem]">
//             Your trusted partner
//             <span className="text-outline block">for marine</span>
//             solutions<span className="text-signal">.</span>
//           </h1>
//           <p className="hero-in hero-in-3 mt-7 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg md:text-xl">
//             Practical engineering • Disciplined execution • Transparent owner reporting. Delivering technical ship
//             management, dry-docking excellence, and offshore operations tailored for vessel owners worldwide.
//           </p>
//           <div className="hero-in hero-in-3 mt-9 flex flex-col gap-3 sm:flex-row">
//             <a href="#services" className="bg-signal px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink">
//               Our Core Services
//             </a>
//             <a href="#about" className="border border-ink px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-white">
//               About Us
//             </a>
//           </div>
//         </div>

//         {/* TWO OVERLAPPING IMAGES */}
//         <div className="relative h-[380px] sm:h-[500px] md:h-[580px] lg:col-span-6 lg:h-[540px] xl:h-[620px]">
//           {/* orange outline frame behind the big image */}
//           <div aria-hidden className="absolute right-0 top-0 h-[72%] w-[78%] translate-x-3 translate-y-3 border-2 border-signal sm:translate-x-4 sm:translate-y-4" />

//           {/* big landscape image */}
//           <div className="absolute right-0 top-0 h-[72%] w-[78%] overflow-hidden bg-panel">
//             <Img src={bannerOne } alt="Container vessel at sea" className="h-full w-full" />
//           </div>

//           {/* smaller image overlapping bottom-left */}
//           <div className="absolute bottom-0 left-0 h-[52%] w-[52%] overflow-hidden border-[6px] border-white bg-panel shadow-xl sm:border-8">
//             <Img src={bannerSecond} alt="Port terminal operations" className="h-full w-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Img } from "./Img";
import bannerOne from "../assets/banner_image_first.png";
import bannerSecond from "../assets/banner_image_second.jpeg";

/*
  Banner = two overlapping photos (no slider).
  lg/xl: text left, photos right.  sm/md: photos drop below the text.

  Fix for cropped images:
  - The photo stack now has a fixed ASPECT RATIO (scales with width) instead of
    fixed pixel heights per breakpoint, so the crop is identical at every size.
  - Each photo box has its own aspect ratio close to the photo's natural ratio.
  - object-cover + object-position keep the important part (ship / people) in frame.
*/
export function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* light blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom,black,transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom,black,transparent 85%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-24">
        {/* CONTENT */}
        <div className="lg:col-span-6">
          <p className="hero-in font-mono text-[11px] uppercase tracking-[0.35em] text-radar sm:text-xs">
            Five minds. One course.
          </p>
          <h1 className="hero-in hero-in-2 mt-5 text-[2.6rem] font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[5.4rem]">
            Your trusted partner
            <span className="text-outline block">for marine</span>
            solutions<span className="text-signal">.</span>
          </h1>
          <p className="hero-in hero-in-3 mt-7 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg md:text-xl">
            Practical engineering • Disciplined execution • Transparent owner reporting. Delivering technical ship
            management, dry-docking excellence, and offshore operations tailored for vessel owners worldwide.
          </p>
          <div className="hero-in hero-in-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="bg-signal px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink"
            >
              Our Core Services
            </a>
            <a
              href="#about"
              className="border border-ink px-8 py-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              About Us
            </a>
          </div>
        </div>

        {/* TWO OVERLAPPING IMAGES */}
        {/* Container height follows its width (20:19), so nothing gets squeezed at any breakpoint */}
        <div className="relative mx-auto aspect-[20/18] w-full max-w-[640px] lg:col-span-6 lg:max-w-none">
          {/* orange outline frame behind the big image */}
          <div
            aria-hidden
            className="absolute right-0 top-0 aspect-[4/3] w-[78%] translate-x-3 translate-y-3 border-2 border-signal sm:translate-x-4 sm:translate-y-4"
          />

          {/* big landscape image (ship sits on the right side of the photo) */}
          <div className="absolute right-0 top-0 aspect-[4/3] w-[78%] overflow-hidden bg-panel">
            <Img
              src={bannerOne}
              alt="Container vessel at sea"
              className="h-full w-full object-cover object-right"
            />
          </div>

          {/* smaller image overlapping bottom-left (people are in the lower-centre) */}
          {/* <div className="absolute bottom-0 left-0 aspect-[10/10] w-[52%] overflow-hidden border-[6px] border-white bg-panel shadow-xl sm:border-8">
            <Img
              src={bannerSecond}
              alt="Port terminal operations"
              className="h-full w-full object-cover object-[50%_65%]"
            />
          </div> */}
          {/* smaller image: box takes the photo's natural ratio, nothing is cropped */}
          <div className="absolute bottom-0 left-0 aspect-[5/5] w-[52%] h-[42%] overflow-hidden border-[6px] border-white bg-panel shadow-xl sm:border-8">
            <Img
              src={bannerSecond}
              alt="Port terminal operations"
              className="block h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}