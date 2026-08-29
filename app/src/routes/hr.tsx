import { createFileRoute } from "@tanstack/react-router";

import { EcoTaxiSite, localizedHead } from "@/components/eco-taxi-site";

export const Route = createFileRoute("/hr")({
  head: () => localizedHead("hr"),
  component: () => <EcoTaxiSite locale="hr" />,
});
