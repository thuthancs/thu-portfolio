import DetailPage from "@/layouts/DetailPage";

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
        <h2>2025</h2>
        <h3 id="design-for-people">Design for people, not your ego</h3>
        <p>I used to take design as something very personal. Whenever I iterated on my personal website, I always tried to be cool by adding effects and interactivity or some UIs that I would not normally see. </p>
        <p>But then I realized that design should be human-centered, meaning you should think about people (e.g., those who read your portfolio, those who use your product, etc.) and the best way to serve them through your design.</p>
        <p>When you design for people, you put aside your ego, quirks, and assumptions to be critiqued and got feedback on. It&apos;s about asking the questions of whether the fonts you use are legible, the information organization is easy for people to scan, the color is accessible, and so on.</p>
        <p>It&apos;s all about having a good intention and an empathatic approach when doing design.</p>
        <h3 id="design-to-solve-problems">Design to solve problems</h3>
        <p>Design is not just about making things look pretty. Design is about crafting a solution to a specific problem.</p>
        <h3 id="design-as-playground">Design as a playground</h3>
        <p>Design should be iterative and fun, like a playground where we experiment with new ideas and keep improving them. A playground consists of people, hence design should collaborative in and of itself.</p>
        <h3 id="design-as-a-craft">Design as a craft</h3>
        <p>Things that people don&apos;t see but will notice when they are off - the padding, margin, letter spacing, the message, the color, the consistency. </p>
      </section>
    </DetailPage>
  );
}
