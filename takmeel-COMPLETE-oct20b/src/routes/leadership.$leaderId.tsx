// src/routes/leadership.$leaderId.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { LeaderProfile } from "@/components/leaders/LeaderProfile";
import { leaders } from "@/content/site";

export const Route = createFileRoute("/leadership/$leaderId")({
  head: ({ params }) => {
    const l = leaders.find((x) => x.id === params.leaderId);
    const name = l?.name ?? "Leadership";
    return seo({
      title: `${name}, ${l?.role ?? "Leadership"} | Takmeel Square`,
      description:
        l?.headline ?? `${name} at Takmeel Square, DHA Bahawalpur.`,
      path: `/leadership/${params.leaderId}`,
      keywords: [name, "Takmeel Square leadership", "Takmeel Square team"],
    });
  },
  component: () => {
    const { leaderId } = Route.useParams();
    return (
      <PageShell>
        <LeaderProfile leaderId={leaderId} />
      </PageShell>
    );
  },
});
