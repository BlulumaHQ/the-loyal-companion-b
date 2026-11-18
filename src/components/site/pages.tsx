import { useState, type ReactNode } from "react";
import type { Member } from "@/content/site";
import { Header, Footer, Cta, Paw, PawBullet, Underline, SCALLOP, h2 } from "./sections";
import {
  GROOMING_INTRO, EXPERIENCE, PRICES, UPGRADES, UPGRADES_INTRO, UPGRADES_SUB, UPGRADES_HELP, GLOWUPS,
  POLICY, ABOUT_SERVICES, ABOUT_INTRO, CREW, CONTACT_INTRO, HOURS, ADDRESS, PHONE, PHONE_HREF, EMAIL, MAP_EMBED, SOCIAL,
} from "@/content/site";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-ink bg-cream overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function PageHero({ kicker, title, word, intro, img, imgAlt }: { kicker: string; title: string; word: string; intro: string; img: string; imgAlt: string }) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-14 flex flex-wrap gap-12 items-center">
      <div className="flex-[1_1_480px] min-w-0">
        <p className="mb-2 font-hand text-[28px] text-plum">{kicker}</p>
        <h1 className="mb-5 font-serif font-semibold text-[clamp(40px,6.5vw,62px)] leading-[1.05]">{title} <Underline>{word}</Underline></h1>
        <p className="mb-7 text-lg text-body">{intro}</p>
        <Cta className="px-[30px] py-4 text-[17px]">Book Your Grooming Appointment</Cta>
      </div>
      <div className="flex-[1_1_380px] min-w-0">
        <img src={img} alt={imgAlt} className="w-full h-[clamp(280px,40vw,400px)] object-cover rounded-[200px_200px_24px_24px]" />
      </div>
    </section>
  );
}

function SageBand({ children }: { children: ReactNode }) {
  return (
    <section className="bg-sage text-white">
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" className="block w-full h-10 bg-cream"><path d={SCALLOP} fill="#5F704A" /></svg>
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-[72px]">{children}</div>
    </section>
  );
}

function FinalBand({ title }: { title: string }) {
  return (
    <section className="px-6 py-16 text-center">
      <h2 className={`${h2} mb-3`}>{title}</h2>
      <p className="mb-6 text-body">Call or text <a href={PHONE_HREF} className="font-bold">{PHONE}</a> to schedule — or book online.</p>
      <Cta className="px-[34px] py-[18px] text-lg">Book Grooming</Cta>
      <p className="mt-6 font-hand text-[26px] text-plum">Because They're Family.</p>
    </section>
  );
}

/* ---------------- Grooming ---------------- */
export function GroomingPage() {
  return (
    <Shell>
      <PageHero kicker="More Than a Groom." title="It's a" word="Feeling." intro={GROOMING_INTRO} img="/images/golden-wash.jpg" imgAlt="Golden retriever relaxing during a gentle bath" />

      <section className="bg-white border-y border-line px-6 py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className={`${h2} text-center mb-10`}>The Grooming Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERIENCE.map((e) => (
              <article key={e.name} className="bg-cream border border-line rounded-[22px] overflow-hidden">
                <img src={e.img} alt={e.name} className="w-full h-[200px] object-cover" />
                <div className="p-6">
                  <p className="font-hand text-[22px] text-plum">{e.tier}</p>
                  <h3 className="font-serif text-[28px] font-bold leading-tight">{e.name}</h3>
                  <p className="font-semibold text-olive mb-2">{e.sub}</p>
                  <p className="text-[15px] text-body">{e.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className={h2}>The Loyal Companion Pampering Menu</h2>
          <p className="mt-2 font-hand text-[26px] text-plum">Thoughtful touches. A little extra luxury. A whole lot of love.</p>
          <p className="mt-2 text-body">Every loyal companion deserves a little TLC! Explore our grooming services, thoughtfully tailored to your pup's size, coat, and individual needs.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PRICES.map((g) => (
            <div key={g.title} className="bg-white border border-line rounded-[22px] p-7">
              <h3 className="font-serif text-[28px] font-bold leading-tight">{g.title}</h3>
              {g.sub && <p className="font-semibold text-olive">{g.sub}</p>}
              {g.desc && <p className="mt-2 text-[15px] text-body">{g.desc}</p>}
              <dl className="mt-4">
                {g.rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-2.5 border-b border-line last:border-b-0">
                    <dt className="flex items-start gap-2.5"><span className="mt-[5px]"><PawBullet /></span>{k}</dt>
                    <dd className="font-bold whitespace-nowrap">{v}</dd>
                  </div>
                ))}
              </dl>
              {g.notes?.map((n) => <p key={n} className="mt-2 text-sm text-body">{n}</p>)}
            </div>
          ))}
        </div>
      </section>

      <SageBand>
        <p className="max-w-[760px] text-lg text-white/90">{UPGRADES_INTRO}</p>
        <h2 className={`${h2} mt-8`}>Specialty Upgrades <span className="text-gold">· $15 for each upgrade</span></h2>
        <p className="mt-2 max-w-[760px] text-white/90">{UPGRADES_SUB}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {UPGRADES.map(([t, d]) => (
            <div key={t} className="bg-white/[0.12] rounded-[20px] p-6">
              <Paw size={22} style={{ fill: "#F2D98B" }} />
              <h3 className="mt-3 font-serif text-[24px] font-semibold leading-snug">{t}</h3>
              <p className="mt-2 text-[15px] text-white/90">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[760px] font-hand text-[26px] leading-snug text-gold">{UPGRADES_HELP}</p>
      </SageBand>

      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className={`${h2} text-center mb-10`}>The Loyal Companion Glow-Ups</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {GLOWUPS.map(([src, n, t], i) => (
            <figure key={n} className="m-0 w-[260px] bg-white p-3 pb-4 shadow-[0_8px_24px_rgba(35,43,29,0.12)]" style={{ transform: `rotate(${i ? 3 : -3}deg)` }}>
              <img src={src} alt={`${n} after a ${t.toLowerCase()}`} className="w-full h-[300px] object-cover" />
              <figcaption className="mt-2 text-center font-hand text-[24px]">{n} — {t}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-line px-6 py-20">
        <div className="max-w-[820px] mx-auto">
          <h2 className={`${h2} mb-6`}>A Little About Our Grooming Services</h2>
          <div className="text-lg text-body">{ABOUT_SERVICES.map((p) => <p key={p} className="mb-4">{p}</p>)}</div>
          <p className="mt-6 rounded-[18px] bg-sand p-5 text-[15px]">{POLICY}</p>
        </div>
      </section>

      <FinalBand title="Ready to treat your companion to a little TLC?" />
    </Shell>
  );
}

/* ---------------- About ---------------- */
function CrewCard({ m }: { m: Member }) {
  const [open, setOpen] = useState(false);
  const isLogo = m.img?.includes("logo-round");
  const [first, ...rest] = m.bio;
  return (
    <article id={m.name.toLowerCase()} className="scroll-mt-6 flex flex-col bg-white border border-line rounded-[22px] overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
        <img src={m.img} alt={isLogo ? "The Loyal Companion logo" : m.name} className={`absolute inset-0 h-full w-full ${isLogo ? "object-contain p-10" : "object-cover"}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-[34px] font-semibold leading-none">{m.name}</h3>
        <p className="mt-1 font-hand text-[24px] leading-tight text-plum">{m.role}</p>
        <div className="mt-3 text-[15px] text-body">
          <p>{first}</p>
          {open && rest.map((p) => <p key={p.slice(0, 24)} className="mt-3">{p}</p>)}
        </div>
        {rest.length > 0 && (
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-4 self-start font-bold text-olive underline-offset-4 hover:underline">
            {open ? "Show less" : `Read ${m.name}'s full story →`}
          </button>
        )}
      </div>
    </article>
  );
}

export function AboutPage() {
  const people = CREW.filter((m) => !["Dexter", "Cooper"].includes(m.name));
  const dogs = CREW.filter((m) => ["Dexter", "Cooper"].includes(m.name));
  const grid = "grid items-start gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(300px,100%),1fr))]";
  return (
    <Shell>
      <PageHero kicker="About us" title="The Heart Behind" word="The Loyal Companion" intro={ABOUT_INTRO} img="/images/glowup-patch.jpg" imgAlt="Patch, freshly groomed" />
      <SageBand>
        <h2 className={h2}>Meet the Loyal Crew</h2>
        <p className="mt-2 text-white/90">The people (and Labs) who'll take care of your dog.</p>
      </SageBand>
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className={grid}>{people.map((m) => <CrewCard key={m.name} m={m} />)}</div>
        <h2 className={`${h2} mt-20 mb-8`}>Our chief testers</h2>
        <div className={grid}>{dogs.map((m) => <CrewCard key={m.name} m={m} />)}</div>
      </section>
      <FinalBand title="We can't wait to meet you and your four-legged family." />
    </Shell>
  );
}

/* ---------------- Contact ---------------- */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const input = "p-3 border border-field rounded-[10px] bg-white w-full font-normal";
  return (
    <Shell>
      <PageHero kicker="Contact us" title="Come Say" word="Hello" intro={CONTACT_INTRO} img="/images/storefront.jpg" imgAlt="The Loyal Companion storefront on Main Street" />
      <section className="bg-white border-y border-line px-6 py-20">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-serif text-[26px] font-bold">Location</h2>
            <p className="mb-5"><a href="https://maps.google.com/?q=55+W+Main+St+Platteville+WI+53818" target="_blank" rel="noopener">{ADDRESS}</a></p>
            <h2 className="font-serif text-[26px] font-bold">Phone</h2>
            <p className="mb-5"><a href={PHONE_HREF}>{PHONE}</a> · call or text</p>
            <h2 className="font-serif text-[26px] font-bold">Email</h2>
            <p className="mb-5 break-all"><a href={`mailto:${EMAIL}?subject=Website%20Inquiry`}>{EMAIL}</a></p>
            <h2 className="font-serif text-[26px] font-bold mb-2">Store Hours</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px] mb-6">
              {HOURS.map(([d, h]) => <div key={d} className="contents"><span className="font-semibold">{d}</span><span>{h}</span></div>)}
            </div>
            <h2 className="font-serif text-[26px] font-bold mb-2">Connect with us!</h2>
            <p className="flex flex-wrap gap-4 font-semibold">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener">Facebook</a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener">Instagram</a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener">TikTok</a>
            </p>
          </div>
          <form className="bg-cream border border-line rounded-[22px] p-7 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); /* TODO: wire form submission in the repo */ setSent(true); }}>
            <h2 className="font-serif text-[28px] font-bold">Send us a message</h2>
            {sent ? <p className="text-lg font-semibold text-olive">Thanks for submitting!</p> : (
              <>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="flex flex-col gap-1 text-sm font-semibold">First Name<input required className={input} name="first" /></label>
                  <label className="flex flex-col gap-1 text-sm font-semibold">Last Name<input className={input} name="last" /></label>
                </div>
                <label className="flex flex-col gap-1 text-sm font-semibold">Email<input required className={input} type="email" name="email" /></label>
                <label className="flex flex-col gap-1 text-sm font-semibold">Message<textarea required className={input} rows={5} name="message" /></label>
                <button type="submit" className="bg-sage text-white p-[14px] rounded-full font-bold min-h-[44px]">Send</button>
              </>
            )}
          </form>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <iframe title="Map to The Loyal Companion, 55 W Main St, Platteville" src={MAP_EMBED} loading="lazy" className="w-full h-[420px] rounded-[22px] border-0" />
      </section>
      <FinalBand title="Your dog is in good hands." />
    </Shell>
  );
}
