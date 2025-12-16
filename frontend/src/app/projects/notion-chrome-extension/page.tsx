import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";

const TOC = [
  { id: "demo", label: "Demo" },
  { id: "problem-statement", label: "Problem Statement" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "technical-documentation", label: "Technical Documentation" },
];

export default function NotionChromeExtensionPage() {
  const project = getAllProjects().find((p) => p.slug === "notion-chrome-extension");

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
          This is placeholder content for the Notion + Chrome Extension project. Use this section to
          showcase screenshots or a short walkthrough of how the extension automates updates to your
          Notion databases.
        </p>
      </section>

      <section id="problem-statement">
        <h2>Problem Statement</h2>
        <p>
          Describe the manual workflows and copy-paste tasks that motivated you to build this
          extension. Focus on the friction people experience when trying to keep Notion databases in
          sync with information they encounter while browsing.
        </p>
      </section>

      <section id="solution">
        <h2>Solution</h2>
        <p>
          Summarize how the extension connects the browser context with Notion: how users trigger
          automation, what information is captured, and how it is transformed into structured
          database entries.
        </p>
      </section>

      <section id="architecture">
        <h2>Project Architecture</h2>
        <p>
          Outline the high-level architecture: content scripts, background scripts, any backend
          services (e.g., an Express server), and how they interact with the Notion API. Mention any
          important design decisions such as rate limiting or authentication.
        </p>
      </section>

      <section id="technical-documentation">
        <h2>Technical Documentation</h2>
        <p>
          Add implementation details, key modules, and configuration or deployment notes. Include
          links to relevant source code, extension manifest configuration, and Notion API schemas if
          helpful.
        </p>
      </section>
    </DetailPage>
  );
}

