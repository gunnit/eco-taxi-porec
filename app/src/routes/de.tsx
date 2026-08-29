import { createFileRoute } from "@tanstack/react-router";

import { EcoTaxiSite, localizedHead } from "@/components/eco-taxi-site";

export const Route = createFileRoute("/de")({
  head: () => localizedHead("de"),
  component: () => <EcoTaxiSite locale="de" />,
});
