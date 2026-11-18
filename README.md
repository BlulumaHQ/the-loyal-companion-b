# The Loyal Companion B

Project name: The Loyal Companion B

Build a single-page website (homepage only) for **The Loyal Companion** — a dog grooming salon & pet shop at 55 W Main St, Platteville, WI. This is SwiftLift Preview B: a conversion-focused, trust-first layout (sage/olive brand palette).

## Follow this design exactly
Below is the finished design as HTML with inline styles (some repeated blocks are described in comments — build them exactly as described). Convert it faithfully into React + Tailwind (one Index page, split into section components). Keep every section, the order, all copy, colours, fonts, spacing, border radii, the paw-print SVGs, the hand-drawn underline, the scalloped "bubble" section divider, the paw-trail background pattern and the hover effect where a small paw appears on the CTA buttons (.cta .pw). Fully responsive; at phone width stack columns and scale headings down with clamp().
The colours and fonts are intentionally derived from the client's own brand (their logo uses a serif wordmark, sage/olive green #5F704A / #8A9680, lavender #BCA2C7 and a terracotta heart), so the workspace rule about avoiding serif headings / cream backgrounds / terracotta does NOT apply to this project — match the design.

## Images
Download each image into /public/images/ with exactly these filenames (e.g. curl -L -o), then reference them as /images/<file>. If downloading is impossible, use the remote URL directly for that image.
- logo.png ← https://static.wixstatic.com/media/fcfa8e_0fad4327a01540509cd311efd8ca134d~mv2.png/v1/fit/w_1600,h_1600,q_85/logo.png
- logo-circle.jpg ← https://static.wixstatic.com/media/fcfa8e_2c2a25ee0a724be0b9b6f8102716ad0b~mv2.jpg/v1/fit/w_1600,h_1600,q_85/logo-circle.jpg
- golden-wash.jpg ← https://static.wixstatic.com/media/11062b_de1c994be9314871a7cc9c14d9c97a9a~mv2.jpg/v1/fit/w_1600,h_1600,q_85/golden-wash.jpg
- bath-time.jpg ← https://static.wixstatic.com/media/11062b_e29cb3a5d8ae458692550b9b747c3fed~mv2_d_4701_3134_s_4_2.jpg/v1/fit/w_1600,h_1600,q_85/bath-time.jpg
- dog-being-bathed.jpg ← https://static.wixstatic.com/media/11062b_59e5ecef03eb42dabca541468dc41dcb~mv2.jpg/v1/fit/w_1600,h_1600,q_85/dog-being-bathed.jpg
- glowup-patch.jpg ← https://static.wixstatic.com/media/fcfa8e_82e92953820d4b509425e9b8a0b4a507~mv2.jpg/v1/fit/w_1600,h_1600,q_85/glowup-patch.jpg
- team-ashley.jpg ← https://static.wixstatic.com/media/fcfa8e_40ccac582c8c47a0ae1d6dcb0775a373~mv2.jpg/v1/fit/w_1600,h_1600,q_85/team-ashley.jpg
- team-brett.jpg ← https://static.wixstatic.com/media/fcfa8e_f0f81c864ccd4adaa05fb271402dd5ed~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/team-brett.jpg
- team-jordan.jpg ← https://static.wixstatic.com/media/fcfa8e_55608dbcdfd44261888fb34303f539f2~mv2.jpg/v1/fit/w_1600,h_1600,q_85/team-jordan.jpg
- team-hannah.jpg ← https://static.wixstatic.com/media/fcfa8e_0ca5540a06fb4883aa092329503fe133~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/team-hannah.jpg
- team-hudson.jpg ← https://static.wixstatic.com/media/fcfa8e_a0194ce93c4441c6bfac61b8d15cab4e~mv2.jpg/v1/fit/w_1600,h_1600,q_85/team-hudson.jpg
- dexter.jpg ← https://static.wixstatic.com/media/fcfa8e_60462b4874204d53bb7daed8f7e1deab~mv2.jpg/v1/fit/w_1600,h_1600,q_85/dexter.jpg
- brand-fido-vite.png ← https://static.wixstatic.com/media/fcfa8e_2bc49fe40f3945c7beb45625ce5ca7cf~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-fido-vite.png
- brand-adored-beast.png ← https://static.wixstatic.com/media/fcfa8e_e3355d510ce94b4886460e014dd0c3b3~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-adored-beast.png
- brand-bark-bistro.png ← https://static.wixstatic.com/media/fcfa8e_6fda7f1ff1be4151adc767fd322bc2c4~mv2.png/v1/fit/w_1600,h_1600,q_85/brand-bark-bistro.png
- brand-proactive-paws.jpg ← https://static.wixstatic.com/media/fcfa8e_0029438113e844bd936c6225d8cc3066~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/brand-proactive-paws.jpg
- storefront.jpg ← https://static.wixstatic.com/media/fcfa8e_88e3f2b956a84c69aa26d87e3498da85~mv2.jpeg/v1/fit/w_1600,h_1600,q_85/storefront.jpg
- paw-trail-sage.svg ← generate (fill #5F704A); paw-trail-light.svg ← generate (fill #FFFFFF)

## Footer credit (overrides the workspace rule)
This is a SwiftLift project, NOT Bluluma. The copyright bar must read: "© 2026 The Loyal Companion. Website by SwiftLift" — "SwiftLift" links to https://swiftlift.app (target _blank, rel="noopener"). Do not mention Bluluma anywhere.

## Other
- Page title: "Dog Grooming in Platteville, WI | The Loyal Companion". Meta description: "Locally owned dog grooming salon and pet shop on Main Street in Platteville, WI. Gentle grooming from people who treat your dog like family. Book online."
- Keep the Google Map as the placeholder box for now. Contact form: UI only, submission as a TODO.
- All "Book" buttons link to https://theloyalcompanion.franpos.co/appointment/ (target _blank).

## Shorthand
- `<Paw size=N style="fill: X"/>` = reusable <Paw> component: `<svg width=N height=N viewBox="-12.5 -13.5 25 25" aria-hidden="true"><ellipse cx="0" cy="6" rx="7" ry="6"/><ellipse cx="-9" cy="-3" rx="3" ry="4"/><ellipse cx="-3.5" cy="-9" rx="3" ry="4"/><ellipse cx="3.5" cy="-9" rx="3" ry="4"/><ellipse cx="9" cy="-3" rx="3" ry="4"/></svg>`. `<Paw hover …/>` = paw inside a .cta button, hidden until hover (.cta .pw{opacity:0;transform:translate(-6px,6px) rotate(-25deg);transition:all .25s} .cta:hover .pw{opacity:1;transform:none}).
- `<PawBullet/>` = `<Paw size=14 style="fill: #BCA2C7; flex: none"/>` used as a list bullet.
- `d="SCALLOP"` = path "M0 40 V20" + 18 × "a40 20 0 0 1 80 0" + "V40 Z" (viewBox 0 0 1440 40).
- Paw-trail SVG files: 480×480 tile with ~11 small paw prints (same shape) walking diagonally bottom-left → top-right, fill-opacity 0.10.
- `<Underline/>` = hand-drawn underline under a word: wrap the word in `<span style="position:relative;display:inline-block">` and add `<svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true" style="position:absolute;left:0;bottom:-6px;width:100%;height:14px"><path d="M3 9 C 50 2, 120 13, 197 5" stroke="#BCA2C7" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`.

## Design HTML
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Caveat:wght@700&display=swap" rel="stylesheet">
<style>
a{color:#4E5E3C}a:hover{color:#2F3A28}
.trail{background-image:url(/images/paw-trail-sage.svg);background-size:420px}
.trail-light{background-image:url(/images/paw-trail-light.svg);background-size:420px}
</style>
<div style="font-family: Inter, sans-serif; color: #232B1D; background: #FCFAF5; line-height: 1.6">

<header style="background:#FCFAF5;border-bottom:1px solid #E7E1D3"><div style="max-width:1200px;margin:0 auto;padding:14px 24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px">
<img src="/images/logo.png" alt="The Loyal Companion" style="height:56px">
<nav style="display:flex;flex-wrap:wrap;align-items:center;gap:22px;font-size:15px;font-weight:600;color:#232B1D">Our Crew (#crew) · Grooming (#services) · Shop &amp; Nutrition (#shop) · Visit (#visit) ·
<a class="cta" href="BOOK" style="background:#5F704A;color:#fff;padding:12px 22px;border-radius:999px;min-height:44px;display:inline-flex;align-items:center;gap:8px;text-decoration:none">Book Grooming <Paw hover size=15 style="fill:#fff"/></a></nav></div></header>

<section style="max-width:1200px;margin:0 auto;padding:56px 24px;display:flex;flex-wrap:wrap;gap:48px;align-items:center">
<div style="flex:1 1 480px;min-width:0">
<p style="margin:0 0 8px;font-family:Caveat,cursive;font-size:28px;color:#8A6E9A">Locally owned in Platteville, WI</p>
<h1 style="margin:0 0 20px;font-family:Lora,serif;font-size:52px;line-height:1.12;font-weight:700">Gentle dog grooming from people who treat your dog like <Underline>family</Underline>.</h1>
<p style="margin:0 0 28px;font-size:18px;color:#4B5543">Ashley and Brett opened The Loyal Companion as a dream come true — a calm, caring salon and pet shop where every companion is family and every person feels at home.</p>
<a class="cta" href="BOOK" style="background:#5F704A;color:#fff;padding:16px 30px;border-radius:999px;font-weight:700;font-size:17px;display:inline-flex;gap:10px;align-items:center">Book your dog's groom <Paw hover size=18 style="fill:#fff"/></a>
<a href="#crew" style="border:2px solid #C9D0BE;padding:14px 26px;border-radius:999px;font-weight:700;font-size:17px;color:#232B1D;margin-left:12px">Meet the crew</a>
</div>
<div style="flex:1 1 420px;min-width:0;position:relative">
<img src="/images/golden-wash.jpg" alt="Golden retriever relaxing during a gentle bath" style="width:100%;height:460px;object-fit:cover;border-radius:220px 220px 24px 24px">
<img src="/images/logo-circle.jpg" alt="" style="position:absolute;left:-22px;bottom:-22px;width:104px;height:104px;border-radius:50%;border:5px solid #FCFAF5">
</div></section>

<section class="trail" style="background-color:#fff;border-top:1px solid #E7E1D3;border-bottom:1px solid #E7E1D3">
<!-- 4-col stat row, centred, padding 32px 24px; big number Lora 36px 700 #4E5E3C, label 14px #4B5543 -->
20+ yrs / Owners as dog parents · 13 yrs / Lead groomer experience · 8 spa rituals / Add-ons for skin, coat, teeth &amp; paws · Included / Nails &amp; ears, every groom
</section>

<section style="max-width:1200px;margin:0 auto;padding:80px 24px">
<h2 style="text-align:center;font-family:Lora,serif;font-size:40px;font-weight:700;margin:0 0 32px">Why Platteville dog owners trust us</h2>
<!-- 3 cards: white, 1px #E7E1D3 border, radius 22px, photo on top 170px tall (cover), padding 24px; title Lora 22px; text 15px #4B5543 -->
[bath-time.jpg] Comfort first — Grooming here is about comfort, connection and care — not rushing through a haircut.
[dog-being-bathed.jpg] Gentle products — Hypoallergenic aloe-chamomile shampoo as standard, plus fragrance-free options for sensitive skin.
[glowup-patch.jpg, object-position center 30%] Honest pricing — Clear starting prices online, then a personalized estimate after your first visit.
</section>

<section class="trail-light" style="background-color:#5F704A;color:#fff">
<svg viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true" style="display:block;width:100%;height:40px;background:#FCFAF5"><path d="SCALLOP" fill="#5F704A"/></svg>
<div style="max-width:1200px;margin:0 auto;padding:48px 24px 72px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px">
<div style="background:rgba(255,255,255,0.12);border-radius:20px;padding:32px">
<p style="margin:0 0 12px;color:#F2D98B;font-size:20px;letter-spacing:3px">★★★★★</p>
<p style="margin:0 0 16px;font-family:Lora,serif;font-size:22px;line-height:1.5">“Amazing experience! Extremely efficient, kind and intentional! Absolutely loved my experience and will be back.”</p>
<p style="margin:0;font-weight:600">Jenna M. · Google</p></div>
<div style="background:rgba(255,255,255,0.12);border-radius:20px;padding:32px;display:flex;flex-direction:column;justify-content:center">
<p style="margin:0 0 12px;font-family:Lora,serif;font-size:22px">Loved by Platteville pups</p>
<a href="https://www.google.com/search?q=The+Loyal+Companion+Platteville+WI" target="_blank" style="color:#fff;font-weight:700">Read our Google reviews →</a></div>
</div></section>

<section id="crew" style="max-width:1200px;margin:0 auto;padding:80px 24px">
<h2 style="margin:0 0 8px;font-family:Lora,serif;font-size:40px;font-weight:700">Meet the Loyal Crew</h2>
<p style="margin:0 0 32px;color:#4B5543">The people (and Labs) who'll take care of your dog.</p>
<!-- grid auto-fit minmax(170px,1fr) gap 20px; each: photo 220px tall cover radius 18px, then bold name, then 14px role #4B5543 -->
team-ashley Ashley — Owner &amp; Proud Dog Mom · team-brett Brett — Co-Owner &amp; Proud Dog Dad · team-jordan Jordan — Groomer &amp; Pup Pampering Pro · team-hannah Hannah — Walk-In Groomer &amp; Freshen-Up Pro · team-hudson Hudson — Client Experience · dexter Dexter &amp; Cooper — Chief Treat &amp; Product Testers
<p style="margin:20px 0 0;font-size:15px;color:#4B5543">Plus <strong>Sam</strong>, our Lead Groomer &amp; Fluff Officer with 13 years of experience.</p>
</section>

<section id="services" style="background:#fff;border-top:1px solid #E7E1D3;padding:80px 24px"><div style="max-width:1000px;margin:0 auto">
<h2 style="margin:0 0 8px;font-family:Lora,serif;font-size:40px;font-weight:700">Grooming &amp; prices</h2>
<p style="margin:0 0 28px;color:#4B5543">Small (0–40 lbs) · Medium (40–80) · Large (80+)</p>
<!-- price rows: flex space-between, padding 18px 0, 1px bottom border #E7E1D3 (none on last); left = <PawBullet/> + bold name + " — " + description; right = bold price -->
The Freshen-Up Bath — bath, towel dry, nails, ears | $35+ / $45+ / $55+
The Fluff &amp; Finish — plus blowout &amp; deshedding | $50+ / $60+ / $70+
The Signature Groom — full groom &amp; haircut | $75+ / $95+ / $115+
Puppy Pampering — bath or first groom | $35+ / $50+
Nail Trim / Dremel — $5 off two dogs | $15 / $20
Spa rituals — 8 add-ons for skin, coat, teeth &amp; paws | $15 each
</div></section>

<section style="max-width:1200px;margin:0 auto;padding:80px 24px">
<h2 style="text-align:center;font-family:Lora,serif;font-size:40px;font-weight:700;margin:0 0 32px">Your first visit</h2>
<!-- 3 centred steps; number in a 60px #5F704A circle, white Lora 24px; title 18px; text 15px #4B5543 -->
1 Book online or call — Choose your service and time, or call or text 608-568-4558.
2 Meet your groomer — Tell us about your dog's coat, skin and personality.
3 Your personal estimate — After the first groom, we set a personalized price for future visits.
</section>

<section id="shop" class="trail" style="background-color:#F2EEE3;padding:72px 24px">
<div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px">
<div style="background:#fff;border-radius:22px;padding:32px">
<h2 style="margin:0 0 8px;font-family:Lora,serif;font-size:30px;font-weight:700">The Shop</h2>
<p style="margin:0 0 16px;color:#4B5543">Treats, toys, accessories and wellness products from brands we trust.</p>
<!-- logo row, gap 14px: brand-fido-vite (50px tall), brand-adored-beast (30px), brand-bark-bistro (54px), brand-proactive-paws (52px, radius 8px) -->
<a href="#visit" style="font-weight:700">Visit the store →</a></div>
<div style="background:#fff;border-radius:22px;padding:32px">
<h2 style="margin:0 0 8px;font-family:Lora,serif;font-size:30px;font-weight:700">Nutrition help</h2>
<p style="margin:0 0 12px;color:#4B5543">Quality food and supplements, with a personal pet nutrition consultant to help you choose.</p>
<a href="tel:6085684558" style="font-weight:700">Ask us →</a></div>
</div></section>

<section style="max-width:820px;margin:0 auto;padding:80px 24px">
<h2 style="margin:0 0 24px;font-family:Lora,serif;font-size:36px;font-weight:700">Questions owners ask</h2>
<!-- <details> accordion, each bottom border 1px #E7E1D3, padding 16px 0, summary bold 17px -->
Is grooming by appointment only? — Yes. Tuesdays the store is closed but grooming is open.
My dog has sensitive skin. Can you help? — Our Sensitive Soul Ritual uses fragrance-free oatmeal and manuka honey — add it to any groom for $15.
Do you take giant breeds? — Yes — giant-breed grooms start at $200 for dogs needing 3+ hours; extra time is $70/hour.
Do you express anal glands? — Not included — we recommend your veterinarian.
</section>

<section id="visit" style="background:#fff;border-top:1px solid #E7E1D3;padding:80px 24px">
<div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:28px;align-items:start">
<div><h2 style="margin:0 0 16px;font-family:Lora,serif;font-size:36px;font-weight:700">Come say hello</h2>
55 W Main St, Platteville, WI 53818 (600) · 608-568-4558 (tel link) · call or text · theloyalcompanionplatteville@gmail.com (mailto)
<!-- hours 2-col grid 15px: Wednesday 9am – 5pm · Thu – Fri 9am – 7pm · Saturday 9am – 3pm · Tuesday Grooming only · Sun · Mon Closed -->
<img src="/images/storefront.jpg" alt="Storefront on Main Street" style="width:100%;height:260px;object-fit:cover;border-radius:18px;margin-top:20px"></div>
<form style="background:#FCFAF5;border:1px solid #E7E1D3;border-radius:22px;padding:28px;display:flex;flex-direction:column;gap:12px">
<h3 style="margin:0;font-family:Lora,serif;font-size:22px">Send us a message</h3>
<!-- labelled inputs Name, Email, Message (textarea 4 rows): 12px padding, 1px #D5CDB9 border, radius 10px -->
<button type="button" style="background:#5F704A;color:#fff;border:0;padding:14px;border-radius:999px;font-weight:700;min-height:44px">Send</button></form>
<div style="min-height:420px;border-radius:22px;background:#E4E7DC;display:flex;align-items:center;justify-content:center;font-weight:600;color:#4E5E3C">Google Map</div>
</div></section>

<section class="trail" style="padding:64px 24px;text-align:center">
<h2 style="margin:0 0 16px;font-family:Lora,serif;font-size:40px;font-weight:700">Your dog is in good hands.</h2>
<a class="cta" href="BOOK" style="background:#5F704A;color:#fff;padding:18px 34px;border-radius:999px;font-weight:700;font-size:18px;display:inline-flex;gap:10px;align-items:center">Book Grooming <Paw hover size=18 style="fill:#fff"/></a>
</section>

<footer style="background:#232B1D;color:#C8D0BF;padding:32px 24px;font-size:14px">
<!-- max-width 1200, flex wrap space-between: left = SwiftLift copyright line; right = Facebook (facebook.com/theloyalcompanionplatteville) · Instagram (instagram.com/theloyalcompanionplatteville) · TikTok (tiktok.com/@theloyalcompanionwi) · Privacy — links white -->
</footer>
</div>
```
(BOOK = https://theloyalcompanion.franpos.co/appointment/)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/895f486f-43df-4327-8166-060dbc33e41d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
