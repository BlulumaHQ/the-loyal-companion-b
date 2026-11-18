import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { SITE_URL } from "@/content/site";

const title = "About Us & Meet the Loyal Crew | The Loyal Companion";
const description = "Meet Ashley, Brett, Hudson, Sam, Jordan, Hannah — and Dexter and Cooper — the family behind The Loyal Companion dog grooming and pet shop in Platteville, WI.";
const url = SITE_URL + "/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:url", content: url }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AboutPage,
});
