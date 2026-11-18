import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Stats, Trust, Reviews, Crew, Prices, FirstVisit, Shop, Faq, Visit, FinalCta, Footer } from "@/components/site/sections";

export const SITE_URL = "https://theloyalcompanionplatteville.com";
const title = "Dog Grooming in Platteville, WI | The Loyal Companion";
const description = "Locally owned dog grooming salon and pet shop on Main Street in Platteville, WI. Gentle grooming from people who treat your dog like family. Book online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="font-sans text-ink bg-cream overflow-x-hidden">
      <Header /><main><Hero /><Stats /><Trust /><Reviews /><Crew /><Prices /><FirstVisit /><Shop /><Faq /><Visit /><FinalCta /></main><Footer />
    </div>
  );
}
