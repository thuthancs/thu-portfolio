import DetailPage from "@/layouts/DetailPage";
import Image from "next/image";

const TOC = [
  { id: "year-2025", label: "2025" },
  { id: "design-for-people", label: "Design for people, not your ego", depth: 1 },
  { id: "design-to-solve-problems", label: "Design to solve problems", depth: 1 },
  { id: "design-as-playground", label: "Design as a playground", depth: 1 },
  { id: "design-as-a-craft", label: "Design as a craft", depth: 1 },
];

export default function DesignManifestoPage() {
  return (
    <DetailPage title="Design Manifesto" summary="A Work in Progress - Design Guiding Principles" toc={TOC}>
      <section id="year-2025">
        <div className="flex justify-center gap-4 mb-6">
          <Image 
            src="/design/found_book.JPG"
            alt="Design Manifesto 2025"
            width={350}
            height={200}
          />
          <Image
            src="/design/product_design_book.JPG"
            alt="Design Manifesto 2025"
            width={350}
            height={200}
          />
        </div>
        <p>Me in 2023 feeling so excited after finding a book called 101 Things I&apos;ve Learned in Product Design School.
          Looking back, the signs have always been there :)
        </p>
        <h2>2025</h2>
        <h3 id="design-for-people">Design for people, not your ego</h3>
        <p>I used to take design as something very personal. Whenever I iterated on my personal website, I always tried to be cool by adding effects and interactivity or some UIs that I would not normally see elsewhere. </p>
        <p>As much as it makes the website looks &quot;cool&quot;, it often comes with a trade-off in terms of readability. I realized that design should be human-centered, meaning I should think about people (e.g., those who read my portfolio, those who use my product, etc.) and the best way to serve them through my design.</p>
        <p>When I design for people, I have to put aside my ego, quirks, and assumptions and be willing to be critiqued. It&apos;s about asking the questions of whether the fonts I use are legible, the information organization is easy for people to scan, the color is accessible, and so on.</p>
        <p>It&apos;s all about having a good intention and an empathatic approach when doing design.</p>
        <h3 id="design-to-solve-problems">Design to solve problems</h3>
        <p>Design is not just about making things look pretty.
        Designing is both about problem-solving and delight. 
        When you set up your new room when you move in a new dorm, that’s design. 
        You have to think about how to make the most out of the small space - where to hang your clothes when there are not enough hangers, where to put your skincare products so that it’s convenient to reach, how to organize the desk so that you feel motivated to work and study. 
        It’s me trying to fit everything in my small dorm room at 16 Turk in San Francisco :) 
        That’s when you design to solve a problem under a constraint, in which case you optimize for functionality and usefulness. 
        There’s another circumstance when you need design. 
        When you design a cafe, you want the customers to have the best drinks and vibes, working or chilling there. 
        You now design to optimize for experience and delight.
        </p>
        <h3 id="design-as-playground">Design as a playground</h3>
        <p>Design should be iterative and fun, like a playground where we experiment with new ideas and keep improving them. A playground consists of people, hence design should collaborative in and of itself.</p>
        <h3 id="design-as-a-craft">Design as a craft</h3>
        <p>Things that people don&apos;t see but will notice when they are off - the padding, margin, letter spacing, the message, the color, the consistency. </p>
      </section>
    </DetailPage>
  );
}
