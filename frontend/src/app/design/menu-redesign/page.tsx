import DetailPage from "@/layouts/DetailPage";
import Image from "next/image";

const TOC = [
  { id: "original-menu", label: "Original Menu Design" },
  { id: "goals", label: "Design Goals"},
  { id: "process", label: "Process"},
  { id: "critique", label: "Design Critique", depth: 1},
  { id: "decisions", label: "Design Decisions", depth: 1},
];

export default function MenuRedesignPage() {
  return (
    <DetailPage
      title="Redesign Hiroshi Ramen Menu"
      summary="A visual redesign of Hiroshi Ramen's menu to improve readability, hierarchy, and overall brand feel."
      toc={TOC}
    >
      <section id="original-menu">
        <div className="my-6 flex justify-center">
            <Image
                src="/design/ramen_hiroshi_redesigned_menu.png"
                alt="Redesigned Hiroshi Ramen menu"
                width={900}
                height={1200}
            />
        </div>
        <h2>Original Menu Design</h2>
        <div className="my-6 flex justify-center">
            <Image
                src="/design/original_hiroshi_menu.jpeg"
                alt="Original Hiroshi Ramen menu"
                width={900}
                height={1200}
            />
        </div>
      </section>

      <section id="goals">
        <h3>Design goals</h3>
        <p>
            Yesterday, I went to a famous ramen place in San Francisco for the first time. While the food was amazing, I found the menu quite overwhelming and hard to navigate.
            It was quite surprising to me that a Japanese restaurant would have such a cluttered menu design because Japanese people are famous for their meticulous attention to detail and aesthetics.
            As a result, I decided to practice my design skills by improving the menu&apos;s layout, visual hierarchy, and readability.
        </p>
      </section>

      <section id="process">
        <h2>Process</h2>
        <p>As a customer, what I care most about whenever I go to a restaurant and scan their menu include: <strong>the ingredients</strong> and <strong>the price</strong>.
            Therefore, my critiques below will focus on how well the original menu design supports me in finding these information quickly and easily.
        </p>
        <h3 id="critique">Design Critique</h3>
        <p>First, the original design has no <strong>visual hierarchy</strong> because it uses the same font size for all elements: dish title, price and descripstion.</p>
        <p>Second, the description of the dish is too lengthy and small. This creates <strong>cognitive overload</strong> because there is too much information I need to process in order to choose a dish.</p>
        <p>Third, there is a <strong>lack of consistency</strong>. Some dishes have pictures associated with them while some don&apos;t</p>
        <p>Finally, the <strong>layout</strong> of the menu is very cluttered and does not support me in finding the information I want using eye-scanning patterns such as Z or F.</p>
        <h3 id="decisions">Design Decisions</h3>
        <p><strong>Visual Hierarchy</strong>: I established a clear visual hierarchy where the title of the dish and its price have a bigger font size (11.5 px) with greater weight (bold) compared to the description of the ingredients (8.5px and light).</p>
        <p><strong>Cognitive Load</strong>: I shortened the description by removing all the adjective expression about the dish and keeping only the nouns that represent the ingredients. I also ordered the options based on the prices so that customers can quickly scan which option is the cheapeast and which one is the most expensive.</p>
        <p><strong>Consistency</strong>: I ensured consistency by adding an image for each dish, except for the vegetarian options because they represent the same dishes just with different ingredients.</p>
        <p><strong>Layout</strong>: I made two decisions regarding the layout choices based on the number of dishes of each category: 1) for the pork-based ramen broth, because there are 4 dishes, 
            I decided to use a two-column layout to save space and create balance, 2) for the chicken-based options, because there are only 4 dishes, I used a single-column layout to avoid creating an empty space,
            and 3) for the vegetarian and extras sections, I used a single-column layout to create a sense of simplicity.
        </p>
      </section>
    </DetailPage>
  );
}


