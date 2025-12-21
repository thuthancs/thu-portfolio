import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";
import Image from "next/image";

const TOC = [
  { id: "overview", label: "Story" },
  { id: "implementation", label: "Implementation details" },
  { id: "learnings", label: "Behind the scenes" },
];

export default function RecursiveTreePage() {
  const project = getAllProjects().find((p) => p.slug === "one-shape-one-color");

  if (!project) {
    return (
      <DetailPage title="Project not found" summary="This project does not exist." toc={[]}>
        <p>The project you are looking for could not be found.</p>
      </DetailPage>
    );
  }

  return (
    <DetailPage title={project.title} tags={project.tags} summary={project.summary} toc={TOC}>
      <section id="overview">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <Image
            src="/projects/creative_coding/one_shape_one_color.png"
            alt="One shape one color"
            width={550}
            height={400}
          />
          <Image
            src="/projects/creative_coding/prompt1_3.png"
            alt="One shape one color 2"
            width={550}
            height={400}
          ></Image>
        </div>
        <h2>Story</h2>
        <p>
        Today San Francisco experienced a power outage and my laptop died. I was left with a pen and a piece of paper. 
        Being bored, I started drawing random things, one of them was tree. 
        As I branching out the tree from one single line to more, I noticed a pattern: 
        if I keep dividing the initial line by half, drawing two different branches from there such that each forms an specific angle with the parent branch, repeating until the length is too small, I will get a tree!
        So i went on to find a cafe that has power and coded it up!
        </p>
      </section>

      <section id="implementation">
        <h2>Implementation in Python</h2>
        <p>
          You can find the code <a href="https://github.com/thuthancs/beautiful-math/blob/main/trees/draw_tree.py">here</a>.
          </p>
      </section>
      <section id="learnings">
        <h2>Behind the scenes</h2>
        <p className="mb-8">I think we really need to spend some time away from our laptop once in a while to get more creative :)</p>
        <Image 
          src="/projects/creative_coding/tree1.jpeg"
          alt="Recursive Tree Drawing Process"
          width={600}
          height={400}
        ></Image>
        <Image
          src="/projects/creative_coding/tree2.jpeg"
          alt="Recursive Tree Drawing Process 2"
          width={600}
          height={400}
        ></Image>
      </section>

    </DetailPage>
  );
}

