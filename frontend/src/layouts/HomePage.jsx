import ContactGrid from "@/components/ContactGrid";
import MenuBar from "@/components/MenuBar";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects/mdx";
import Image from "next/image";
import "../app/globals.css";

export default function HomePage() {
  return (
    <div className="home-shell">
      <div className="intro-grid">
        {/* Left Column - Main Content */}
        <div>
          <MenuBar />

          {/* Introduction */}
          <div className="mb-16 md:mb-20 max-w-4xl">
            <p className="mb-8 text-[20px]">
              I&apos;m Thu. <strong className="text-black">Design Engineer</strong>.
            </p>
            <p className="mb-8 text-[20px]">
              I build tools and educational materials that help people and organizations{" "}
              <strong className="text-black">leverage data</strong> to make informed decisions, augment human{" "}
              <strong className="text-black">productivity and creativity</strong>, as well as{" "}
              <strong className="text-black">understand</strong> the world a little bit better.
            </p>
            <p className="mt-8 text-[20px]">
              Currently <strong className="text-black">designing data tools</strong> to advance{" "}
              <strong className="text-black">academic success</strong> at Minerva and building{" "}
              <strong className="text-black">a game-based RL learning platform</strong> for beginners.
            </p>
          </div>
        </div>

        {/* Right Column - Portrait */}
        <div className="relative">
          <Image
            src="/portrait_frame.png"
            alt="Profile Picture"
            width={240}
            height={480}
            sizes="(min-width: 1024px) 240px, 40vw"
            className="w-40 md:w-52 lg:w-60 h-auto mx-auto"
            priority
          />
          {/* Social Links */}
          <ContactGrid />
        </div>
      </div>

      {/* Featured Projects */}
      <section className="projects-grid projects-grid--home">
        {getFeaturedProjects().map((project) => (
          <ProjectCard
            key={project.slug}
            thumbnail={project.thumbnail}
            title={project.title}
            tags={project.tags}
            summary={project.summary}
            href={`/projects/${project.slug}`}
          />
        ))}
      </section>
    </div>
  );
}
