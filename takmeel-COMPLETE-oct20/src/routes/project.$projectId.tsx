// src/routes/project.$projectId.tsx
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageShell } from "@/components/apartments/PageShell";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/project/$projectId")({
  head: ({ params }) => {
    const p = projects.find((x) => x.id === params.projectId);
    const name = p?.name ?? "Project";
    return seo({
      title: `${name}, ${p?.type ?? "Takmeel Square"} | DHA Bahawalpur`,
      description:
        p?.description ??
        "Explore this Takmeel Square development in DHA Bahawalpur, South Punjab's premier commercial hub.",
      path: `/project/${params.projectId}`,
      keywords: [name, `${name} DHA Bahawalpur`, "Takmeel Square"],
    });
  },
  component: () => {
    const { projectId } = Route.useParams();
    return (
      <PageShell>
        <ProjectDetail projectId={projectId} />
      </PageShell>
    );
  },
});
