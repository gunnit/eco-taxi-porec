import { createFileRoute } from "@tanstack/react-router";

import { EcoTaxiSite, localizedHead } from "@/components/eco-taxi-site";

export const Route = createFileRoute("/it")({
  head: () => localizedHead("it"),
  component: () => <EcoTaxiSite locale="it" />,
});
