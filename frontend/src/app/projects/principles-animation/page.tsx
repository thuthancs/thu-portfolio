import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";
import Image from "next/image";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "implementation", label: "Implementation" },
];

export default function RecursiveTreePage() {
  const project = getAllProjects().find((p) => p.slug === "principles-animation");

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
            src="/project_previews/bouncing_ball.gif"
            alt="Animation"
            width={550}
            height={400}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <Image
            src="/projects/creative_coding/bouncing_ball_v2.gif"
            alt="Animation"
            width={550}
            height={400}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <Image
            src="/projects/creative_coding/bouncing_ball_v3.gif"
            alt="Animation"
            width={550}
            height={400}
          />
        </div>
        <h2>Overview</h2>
        <p>Today&apos;s prompt is about experimenting with animation. I decided to animate a bouncing ball, which is a good idea for beginners. Applying all 12 principles would be too overwhelming, so I just used the first one called squash and stretch. The animation went through 3 key iterations, and I used matplotlib (Python) to create all the frames.</p>
      </section>

      <section id="implementation">
        <h2>Implementation in Python</h2>
        <p>For the first version, I hardcoded the frames. I defined where the coordinates of the circles/ellipses should be, the peaks and landing points. This was done very manually by drawing the plot with x and y axes on paper and mapping the coordinates for each frame. Then I just converted those into code. Squash is applied when the ball lands horizontally, and stretch is applied during fall and rebound. V1 looks okay, but it didn't feel very natural, so I added more frames in between key poses for V2.</p>
        <p>For the final version, I noticed how V2 was pretty disrupted due to a non-smooth and disruptive arc I defined. So, I decided to create a simple parabolic arc (which looks more like ball-like movement).</p>
      </section>

    </DetailPage>
  );
}

