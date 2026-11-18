import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { SITE_URL } from "@/content/site";

const title = "Contact & Hours | The Loyal Companion, Platteville WI";
const description = "Visit The Loyal Companion at 55 W Main St, Platteville, WI. Call or text 608-568-4558, see store hours, or send us a message.";
const url = SITE_URL + "/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ContactPage,
});
