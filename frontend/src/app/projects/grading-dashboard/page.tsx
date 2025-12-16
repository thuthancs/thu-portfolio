import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";

const TOC = [
  { id: "demo", label: "Demo" },
  { id: "problem-statement", label: "Problem Statement" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "technical-documentation", label: "Technical Documentation" },
];

export default function GradingDashboardPage() {
  const project = getAllProjects().find((p) => p.slug === "grading-dashboard");

  if (!project) {
    return (
      <DetailPage title="Project not found" summary="This project does not exist." toc={[]}>
        <p>The project you are looking for could not be found.</p>
      </DetailPage>
    );
  }

  return (
    <DetailPage title={project.title} tags={project.tags} summary={project.summary} toc={TOC}>
      <section id="demo">
        <h2>Demo</h2>
        <p>
          This is placeholder content for the Grading Data Dashboard. Use this section to show key
          views: course-level overviews, cohort comparisons, and drill-downs into student or
          assignment performance.
        </p>
      </section>

      <section id="problem-statement">
        <h2>Problem Statement</h2>
        <p>
          Explain the limitations of existing grade exports or spreadsheets. Highlight why it was
          difficult for instructors or administrators to understand patterns, identify outliers, or
          evaluate the impact of interventions over time.
        </p>
      </section>

      <section id="solution">
        <h2>Solution</h2>
        <p>
          Describe how the dashboard transforms raw grading data into interpretable visualizations
          and metrics. Call out features like cohort filters, time-series views, or significance
          testing that enable better decision-making.
        </p>
      </section>

      <section id="architecture">
        <h2>Project Architecture</h2>
        <p>
          Outline the data pipeline: ingestion (CSV exports, database connections, APIs), cleaning
          and transformation steps, and how data is served to the front end. Mention any charting
          libraries or frameworks you use for interactive visualizations.
        </p>
      </section>

      <section id="technical-documentation">
        <h2>Technical Documentation</h2>
        <p>
          Add implementation details such as schema design, key modules, and performance
          considerations. Include notes on deployment, environment configuration, and how new
          grading datasets can be onboarded into the system.
        </p>
      </section>
    </DetailPage>
  );
}

