// import { FormEvent } from "react";

// const EMAIL = "info@navifive.com"; // change to your email
// const PHONE = "+91 00000 00000";   // change to your phone

// export function Contact() {
//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const f = new FormData(e.currentTarget);
//     const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
//     window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry from website")}&body=${encodeURIComponent(body)}`;
//   };

//   const field =
//     "w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-signal sm:text-base";

//   return (
//     <section id="contact" className="bg-white py-16 sm:py-20 lg:py-28">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-10">
//         <div className="lg:col-span-2">
//           <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">Contact</p>
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
//             Tell us about your vessel.
//           </h2>
//           <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
//             Send your requirement and our team will reply with next steps.
//           </p>
//           <dl className="mt-8 space-y-4 text-sm sm:text-base">
//             <div>
//               <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Email</dt>
//               <dd><a href={`mailto:${EMAIL}`} className="font-bold hover:text-signal">{EMAIL}</a></dd>
//             </div>
//             <div>
//               <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Phone</dt>
//               <dd><a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-bold hover:text-signal">{PHONE}</a></dd>
//             </div>
//           </dl>
//         </div>

//         <form onSubmit={onSubmit} className="grid gap-4 bg-panel p-6 sm:grid-cols-2 sm:p-10 lg:col-span-3">
//           <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
//           <input name="phone" placeholder="Phone number" aria-label="Phone number" className={field} />
//           <textarea name="message" required rows={5} placeholder="How can we help?" aria-label="Message"
//             className={`${field} sm:col-span-2`} />
//           <button type="submit"
//             className="bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink sm:col-span-2">
//             Send message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



import { FormEvent, useState } from "react";

// const RECEIVER = "leorogan61@gmail.com"; 
// const RECEIVER = "937fc25eb2406024db320dc4db2bbbe1";
// const RECEIVER = "admin@navifiveshipmanagement.com"; 
const RECEIVER = "02e2e2af1118c09e6f92df8ddff07921"; 
 

const emails = [
  { label: "Services", value: "services@navifiveshipmanagement.com" },
  { label: "Admin", value: "admin@navifiveshipmanagement.com" },
  { label: "DPA", value: "dpa@navifiveshipmanagement.com" },
  { label: "Common", value: "common@navifiveshipmanagement.com" },
  { label: "Operations", value: "operations@navifiveshipmanagement.com" },
  { label: "Technical", value: "technical@navifiveshipmanagement.com" },
];

const phones = [
  { display: "+91 70399 15538", tel: "+917039915538" },
  { display: "+91 90009 99242", tel: "+919000999242" },
];

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);

    // honeypot: bots fill this hidden field, humans don't
    if (f.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECEIVER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          phone: f.get("phone"),
          message: f.get("message"),
          _subject: "Enquiry from Navifive website",
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-signal sm:text-base";

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* ---------- TOP: intro + phones (left), form (right) ---------- */}
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-radar">Contact</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
              Tell us about your vessel.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
              Send your requirement and our team will reply with next steps.
            </p>

            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Phone</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="border border-line px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-signal hover:text-signal sm:text-base"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <form
            onSubmit={onSubmit}
            className="grid gap-4 bg-panel p-6 sm:grid-cols-2 sm:p-10 lg:col-span-3"
          >
            <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
            <input name="phone" placeholder="Phone number" aria-label="Phone number" className={field} />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can we help?"
              aria-label="Message"
              className={`${field} sm:col-span-2`}
            />

            {/* honeypot (hidden) */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-signal px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p
                role="status"
                className="border-l-4 border-signal bg-white p-4 text-sm font-semibold text-ink sm:col-span-2"
              >
                Thank you! Your message has been sent. Our team will get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="border-l-4 border-red-500 bg-white p-4 text-sm font-semibold text-red-600 sm:col-span-2"
              >
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>

        {/* ---------- BOTTOM: emails in a compact grid ---------- */}
        <div className="mt-12 lg:mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Email us directly</p>
          <span className="mt-3 block h-1 w-12 bg-signal" />

          <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {emails.map((m) => (
              <a
                key={m.value}
                href={`mailto:${m.value}`}
                className="group block bg-white p-5 transition-colors hover:bg-panel sm:p-6"
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-radar">
                  {m.label}
                </span>
                <span className="mt-1.5 block break-all text-sm font-bold text-ink transition-colors group-hover:text-signal sm:text-base">
                  {m.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}