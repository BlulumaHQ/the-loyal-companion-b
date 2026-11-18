import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { REVIEWS, MAP_EMBED } from "@/content/site";

export const BOOK = "https://theloyalcompanion.franpos.co/appointment/";
export const h2 = "font-serif font-semibold text-[clamp(34px,5.5vw,50px)] leading-[1.05]";

export function Paw({ size, style, hover }: { size: number; style?: CSSProperties; hover?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="-12.5 -13.5 25 25" aria-hidden="true" className={hover ? "pw" : undefined} style={style}>
      <ellipse cx="0" cy="6" rx="7" ry="6" /><ellipse cx="-9" cy="-3" rx="3" ry="4" /><ellipse cx="-3.5" cy="-9" rx="3" ry="4" /><ellipse cx="3.5" cy="-9" rx="3" ry="4" /><ellipse cx="9" cy="-3" rx="3" ry="4" />
    </svg>
  );
}
export const PawBullet = () => <Paw size={14} style={{ fill: "#BCA2C7", flex: "none" }} />;
export function Underline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">{children}
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true" className="absolute left-0 -bottom-[6px] w-full h-[14px]">
        <path d="M3 9 C 50 2, 120 13, 197 5" stroke="#BCA2C7" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}
export function Cta({ children, className = "", pawSize = 18 }: { children: ReactNode; className?: string; pawSize?: number }) {
  return (
    <a className={`cta bg-sage rounded-full inline-flex items-center gap-[10px] font-bold ${className}`} href={BOOK} target="_blank" rel="noopener">
      {children} <Paw hover size={pawSize} style={{ fill: "#fff" }} />
    </a>
  );
}
export const SCALLOP = "M0 40 V20" + " a40 20 0 0 1 80 0".repeat(18) + " V40 Z";

export function Header() {
  return (
    <header className="bg-cream border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-[14px]">
        <Link to="/" className="shrink-0"><img src="/images/logo.png" alt="The Loyal Companion" className="h-[80px] md:h-[112px] w-auto" /></Link>
        <nav className="flex flex-wrap items-center gap-[22px] text-[15px] font-semibold">
          <Link to="/about" className="!text-ink no-underline" activeProps={{ className: "underline decoration-lav decoration-[3px] underline-offset-8" }}>Our Crew</Link>
          <Link to="/grooming" className="!text-ink no-underline" activeProps={{ className: "underline decoration-lav decoration-[3px] underline-offset-8" }}>Grooming</Link>
          <a href="/#shop" className="!text-ink no-underline">Shop &amp; Nutrition</a>
          <Link to="/contact" className="!text-ink no-underline" activeProps={{ className: "underline decoration-lav decoration-[3px] underline-offset-8" }}>Visit</Link>
          <Cta className="px-[22px] py-3 min-h-[44px] gap-2 font-semibold" pawSize={15}>Book Grooming</Cta>
        </nav>
      </div>
    </header>
  );
}

const SLIDES = [
  ["/images/hero-1.jpg", "Golden retriever relaxing during a gentle bath", "center 40%"],
  ["/images/hero-3.jpg", "Doodle getting a professional blowout", "center 30%"],
  ["/images/hero-2.jpg", "Fluffy pup during bath time", "center 35%"],
  ["/images/hero-4.jpg", "Yorkie getting a personalized trim", "center 35%"],
];

export function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [paused]);
  const go = (d: number) => setI((n) => (n + d + SLIDES.length) % SLIDES.length);
  return (
    <section className="relative isolate h-[clamp(560px,82vh,780px)] w-full overflow-hidden bg-ink" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Our happy pups">
      {SLIDES.map(([src, alt, pos], n) => (
        <img key={src} src={src} alt={alt} loading={n ? "lazy" : "eager"} aria-hidden={n !== i}
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ${n === i ? "opacity-100" : "opacity-0"}`} style={{ objectPosition: pos }} />
      ))}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(35,43,29,0.85)_0%,rgba(35,43,29,0.55)_45%,rgba(35,43,29,0.05)_80%)]" />
      <div className="max-w-[1200px] mx-auto h-full px-6 pb-20 flex flex-col justify-end text-white">
        <p className="mb-2 font-hand text-[28px] text-lav">Locally owned in Platteville, WI</p>
        <h1 className="max-w-[760px] mb-5 font-serif font-semibold text-[clamp(42px,7vw,72px)] leading-[1.02]">Gentle dog grooming from people who treat your dog like <Underline>family</Underline>.</h1>
        <p className="max-w-[560px] mb-8 text-lg text-white/90">Ashley and Brett opened The Loyal Companion as a dream come true — a calm, caring salon and pet shop where every companion is family and every person feels at home.</p>
        <div className="flex flex-wrap gap-3">
          <Cta className="px-[30px] py-4 text-[17px]">Book your dog's groom</Cta>
          <Link to="/about" className="border-2 border-white/80 px-[26px] py-[14px] rounded-full font-bold text-[17px] !text-white no-underline">Meet the crew</Link>
        </div>
      </div>
      <div className="absolute right-6 bottom-8 flex items-center gap-3 md:right-[max(24px,calc((100vw-1200px)/2+24px))]">
        <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 text-xl text-white hover:bg-white/15">‹</button>
        {SLIDES.map((_, n) => (
          <button key={n} type="button" onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`} aria-current={n === i}
            className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-lav" : "w-2.5 bg-white/60"}`} />
        ))}
        <button type="button" onClick={() => go(1)} aria-label="Next photo" className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 text-xl text-white hover:bg-white/15">›</button>
      </div>
    </section>
  );
}

export function Stats() {
  const s = [["20+ yrs", "Owners as dog parents"], ["13 yrs", "Lead groomer experience"], ["8 spa rituals", "Add-ons for skin, coat, teeth & paws"], ["Included", "Nails & ears, every groom"]];
  return (
    <section className="bg-white border-y border-line">
      <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {s.map(([n, l]) => <div key={n}><div className="font-serif text-[clamp(26px,4vw,36px)] font-bold text-olive leading-tight">{n}</div><div className="text-sm text-body">{l}</div></div>)}
      </div>
    </section>
  );
}

export function Trust() {
  const c = [["bath-time.jpg", "Comfort first", "Grooming here is about comfort, connection and care — not rushing through a haircut.", "center"],
    ["dog-being-bathed.jpg", "Gentle products", "Hypoallergenic aloe-chamomile shampoo as standard, plus fragrance-free options for sensitive skin.", "center"],
    ["glowup-patch.jpg", "Honest pricing", "Clear starting prices online, then a personalized estimate after your first visit.", "center 30%"]];
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className={`${h2} text-center mb-8`}>Why Platteville dog owners trust us</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {c.map(([img, t, d, pos]) => (
          <div key={t} className="bg-white border border-line rounded-[22px] overflow-hidden">
            <img src={`/images/${img}`} alt={t} className="w-full h-[170px] object-cover" style={{ objectPosition: pos }} />
            <div className="p-6"><h3 className="font-serif text-[26px] font-semibold mb-2">{t}</h3><p className="text-[15px] text-body">{d}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, [i]);
  const go = (d: number) => setI((n) => (n + d + REVIEWS.length) % REVIEWS.length);
  return (
    <section className="relative overflow-hidden bg-white border-y border-line px-6 pt-20 pb-44" aria-roledescription="carousel" aria-label="Google reviews">
      <img src="/images/paw-wave.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-3 h-[150px] w-full" />
      <h2 className={`${h2} text-center mb-10 relative`}>Loved by Platteville pups</h2>
      <div className="relative max-w-[920px] mx-auto flex items-center gap-4 md:gap-8">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-sage bg-white text-2xl text-sage">‹</button>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
            {REVIEWS.map((r, n) => (
              <figure key={r.name} className="m-0 w-full shrink-0 px-1 text-center" aria-hidden={n !== i}>
                <div className="mb-5 flex justify-center gap-1.5" role="img" aria-label="5 out of 5">
                  {[0, 1, 2, 3, 4].map((k) => <Paw key={k} size={26} style={{ fill: "#BCA2C7" }} />)}
                </div>
                <blockquote className="m-0 font-serif text-[clamp(24px,3.4vw,34px)] leading-[1.3]">“{r.text}”</blockquote>
                <figcaption className="mt-5 font-semibold text-olive">{r.name} · Google Review</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {REVIEWS.map((r, n) => (
              <button key={r.name} type="button" onClick={() => setI(n)} aria-label={`Show review ${n + 1}`} aria-current={n === i}
                className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-sage" : "w-2.5 bg-ink/25"}`} />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-sage bg-white text-2xl text-sage">›</button>
      </div>
    </section>
  );
}

export function Crew() {
  const t = [["team-ashley", "Ashley", "Owner & Proud Dog Mom"], ["team-brett", "Brett", "Co-Owner & Proud Dog Dad"], ["team-jordan", "Jordan", "Groomer & Pup Pampering Pro"], ["team-hannah", "Hannah", "Walk-In Groomer & Freshen-Up Pro"], ["team-hudson", "Hudson", "Client Experience"], ["dexter", "Dexter & Cooper", "Chief Treat & Product Testers"]];
  return (
    <section id="crew" className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className={`${h2} mb-2`}>Meet the Loyal Crew</h2>
      <p className="mb-8 text-body">The people (and Labs) who'll take care of your dog.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-5">
        {t.map(([i, n, r]) => <div key={i}><img src={`/images/${i}.jpg`} alt={n} className="w-full h-[220px] object-cover rounded-[18px] mb-2" /><div className="font-bold">{n}</div><div className="text-sm text-body">{r}</div></div>)}
      </div>
      <p className="mt-5 text-[15px] text-body">Plus <strong>Sam</strong>, our Lead Groomer &amp; Fluff Officer with 13 years of experience.</p>
      <Link to="/about" className="mt-3 inline-block font-bold">Read everyone's story →</Link>
    </section>
  );
}

export function Prices() {
  const p = [["The Freshen-Up Bath", "bath, towel dry, nails, ears", "$35+ / $45+ / $55+"], ["The Fluff & Finish", "plus blowout & deshedding", "$50+ / $60+ / $70+"], ["The Signature Groom", "full groom & haircut", "$75+ / $95+ / $115+"], ["Puppy Pampering", "bath or first groom", "$35+ / $50+"], ["Nail Trim / Dremel", "$5 off two dogs", "$15 / $20"], ["Spa rituals", "8 add-ons for skin, coat, teeth & paws", "$15 each"]];
  return (
    <section id="services" className="bg-white border-t border-line px-6 py-20">
      <div className="max-w-[1000px] mx-auto">
        <h2 className={`${h2} mb-2`}>Grooming &amp; prices</h2>
        <p className="mb-7 text-body">Small (0–40 lbs) · Medium (40–80) · Large (80+)</p>
        {p.map(([n, d, pr]) => (
          <div key={n} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-[18px] border-b border-line last:border-b-0">
            <div className="flex items-start gap-[10px]"><span className="mt-[6px]"><PawBullet /></span><span><strong>{n}</strong> — {d}</span></div>
            <strong className="pl-6 sm:pl-0">{pr}</strong>
          </div>
        ))}
        <Link to="/grooming" className="mt-6 inline-block font-bold">See every size, add-on &amp; spa ritual →</Link>
      </div>
    </section>
  );
}

export function FirstVisit() {
  const s = [["Book online or call", "Choose your service and time, or call or text 608-568-4558."], ["Meet your groomer", "Tell us about your dog's coat, skin and personality."], ["Your personal estimate", "After the first groom, we set a personalized price for future visits."]];
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className={`${h2} text-center mb-8`}>Your first visit</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {s.map(([t, d], i) => <div key={t}><div className="w-[60px] h-[60px] mx-auto mb-3 rounded-full bg-sage text-white font-serif text-2xl flex items-center justify-center">{i + 1}</div><h3 className="text-lg font-semibold mb-1">{t}</h3><p className="text-[15px] text-body">{d}</p></div>)}
      </div>
    </section>
  );
}

export function Shop() {
  return (
    <section id="shop" className="bg-sand px-6 py-[72px]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-[22px] p-8">
          <h2 className="mb-2 font-serif text-[34px] font-bold">The Shop</h2>
          <p className="mb-4 text-body">Treats, toys, accessories and wellness products from brands we trust.</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[["brand-fido-vite.png", "Fido Vite", "h-[76px]"], ["brand-adored-beast.png", "Adored Beast Apothecary", "h-[42px]"], ["brand-bark-bistro.png", "Bark Bistro", "h-[92px]"], ["brand-proactive-paws.jpg", "Proactive Paws", "h-[96px] rounded-lg"]].map(([f, a, h]) => (
              <span key={f} className="flex h-[136px] items-center justify-center rounded-[16px] border border-line bg-cream px-4"><img src={`/images/${f}`} alt={a} className={`${h} w-auto max-w-full object-contain`} /></span>
            ))}
          </div>
          <Link to="/contact" className="font-bold">Visit the store →</Link>
        </div>
        <div className="bg-white rounded-[22px] p-8">
          <h2 className="mb-2 font-serif text-[34px] font-bold">Nutrition help</h2>
          <p className="mb-3 text-body">Quality food and supplements, with a personal pet nutrition consultant to help you choose.</p>
          <a href="tel:6085684558" className="font-bold">Ask us →</a>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const q = [["Is grooming by appointment only?", "Yes. Tuesdays the store is closed but grooming is open."], ["My dog has sensitive skin. Can you help?", "Our Sensitive Soul Ritual uses fragrance-free oatmeal and manuka honey — add it to any groom for $15."], ["Do you take giant breeds?", "Yes — giant-breed grooms start at $200 for dogs needing 3+ hours; extra time is $70/hour."], ["Do you express anal glands?", "Not included — we recommend your veterinarian."]];
  return (
    <section className="max-w-[820px] mx-auto px-6 py-20">
      <h2 className="mb-6 font-serif text-[clamp(28px,5vw,36px)] font-bold">Questions owners ask</h2>
      {q.map(([s, a]) => <details key={s} className="border-b border-line py-4"><summary className="font-bold text-[17px] cursor-pointer">{s}</summary><p className="mt-2 text-body">{a}</p></details>)}
    </section>
  );
}

export function Visit() {
  const input = "p-3 border border-field rounded-[10px] bg-white w-full";
  return (
    <section id="visit" className="bg-white border-t border-line px-6 py-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 items-start">
        <div>
          <h2 className="mb-4 font-serif text-[clamp(28px,5vw,36px)] font-bold">Come say hello</h2>
          <p><a href="https://maps.google.com/?q=55+W+Main+St+Platteville+WI+53818" target="_blank" rel="noopener">55 W Main St, Platteville, WI 53818</a></p>
          <p><a href="tel:6085684558">608-568-4558</a> · call or text</p>
          <p className="mb-4 break-all"><a href="mailto:theloyalcompanionplatteville@gmail.com">theloyalcompanionplatteville@gmail.com</a></p>
          <div className="grid grid-cols-2 gap-x-4 text-[15px]">
            {([["Wednesday", "9am – 5pm"], ["Thu – Fri", "9am – 7pm"], ["Saturday", "9am – 3pm"], ["Tuesday", "Grooming only"], ["Sun · Mon", "Closed"]] as const).map(([d, h]) => <div key={d} className="contents"><span className="font-semibold">{d}</span><span>{h}</span></div>)}
          </div>
          <img src="/images/storefront.jpg" alt="Storefront on Main Street" className="w-full h-[260px] object-cover rounded-[18px] mt-5" />
        </div>
        {/* TODO: wire up form submission */}
        <form className="bg-cream border border-line rounded-[22px] p-7 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <h3 className="font-serif text-[26px] font-semibold">Send us a message</h3>
          <label className="flex flex-col gap-1 text-sm font-semibold">Name<input className={input} name="name" /></label>
          <label className="flex flex-col gap-1 text-sm font-semibold">Email<input className={input} type="email" name="email" /></label>
          <label className="flex flex-col gap-1 text-sm font-semibold">Message<textarea className={input} rows={4} name="message" /></label>
          <button type="button" className="bg-sage text-white p-[14px] rounded-full font-bold min-h-[44px]">Send</button>
        </form>
        <iframe title="Map to The Loyal Companion, 55 W Main St, Platteville" src={MAP_EMBED} loading="lazy" className="min-h-[420px] h-full w-full rounded-[22px] border-0" />
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className={`${h2} mb-4`}>Your dog is in good hands.</h2>
      <Cta className="px-[34px] py-[18px] text-lg">Book Grooming</Cta>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-foot px-6 py-8 text-sm">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <img src="/images/lavender-badge.png" alt="Dogs · People · Community · Belonging" className="h-[104px] w-[104px] rounded-full bg-white p-1" />
        <p>© 2026 The Loyal Companion. Website by <a href="https://swiftlift.app" target="_blank" rel="noopener" className="!text-white">SwiftLift</a></p>
        <div className="flex flex-wrap gap-4">
          {[["Facebook", "https://facebook.com/theloyalcompanionplatteville"], ["Instagram", "https://instagram.com/theloyalcompanionplatteville"], ["TikTok", "https://tiktok.com/@theloyalcompanionwi"], ["Contact", "/contact"]].map(([l, h]) => <a key={l} href={h} target={h?.startsWith("/") ? undefined : "_blank"} rel="noopener" className="!text-white">{l}</a>)}
        </div>
      </div>
    </footer>
  );
}
