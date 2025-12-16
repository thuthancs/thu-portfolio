import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";

const TOC = [
  { id: "demo", label: "Demo" },
  { id: "problem-statement", label: "Problem Statement" },
  { id: "solution", label: "Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "technical-documentation", label: "Technical Documentation" },
];

export default function RlGameLearningPage() {
  const project = getAllProjects().find((p) => p.slug === "rl-game-learning");

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
          This is placeholder content for the RL Game Tutorials project. Use this section to show
          short clips or interactive embeds of games like snake or flappy bird that illustrate
          reinforcement learning concepts.
        </p>
      </section>

      <section id="problem-statement">
        <h2>Problem Statement</h2>
        <p>
          Explain why reinforcement learning can feel abstract or intimidating for beginners. Describe
          the gap between mathematical definitions and intuitive understanding of agents, rewards, and
          environments.
        </p>
      </section>

      <section id="solution">
        <h2>Solution</h2>
        <p>
          Describe how your tutorials layer interactive games, visualizations, and explanations to
          make RL concepts concrete. Call out how learners can tweak parameters, observe policy
          changes, and connect results back to core theory.
        </p>
      </section>

      <section id="architecture">
        <h2>Project Architecture</h2>
        <p>
          Outline how game logic, RL algorithms, and the front-end UI are organized. Mention any
          separation between simulation code and rendering, and how models are trained or run
          in-browser versus on a backend.
        </p>
      </section>

      <section id="technical-documentation">
        <h2>Technical Documentation</h2>
        <p>
          Add details on the RL libraries or custom implementations you use, how environments are
          structured, and how new games or algorithms can be added to the platform. Include pointers
          to relevant notebooks or source files.
        </p>
      </section>
    </DetailPage>
  );
}

