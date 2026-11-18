import { createFileRoute } from "@tanstack/react-router";
import { GroomingPage } from "@/components/site/pages";
import { SITE_URL } from "@/content/site";

const title = "Dog Grooming Prices & Spa Rituals | The Loyal Companion, Platteville WI";
const description = "Bath, blowout and full-groom pricing by size, puppy pampering, nail care and eight specialty spa rituals at The Loyal Companion in Platteville, WI.";
const url = SITE_URL + "/grooming";

export const Route = createFileRoute("/grooming")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: GroomingPage,
});
