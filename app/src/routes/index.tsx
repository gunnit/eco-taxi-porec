import { createFileRoute } from "@tanstack/react-router";

import { EcoTaxiSite, localizedHead } from "@/components/eco-taxi-site";

// English owns the root; /hr, /de and /it render the same site from the same
// content module. See src/i18n/content.ts.
export const Route = createFileRoute("/")({
  head: () => localizedHead("en"),
  component: () => <EcoTaxiSite locale="en" />,
});
