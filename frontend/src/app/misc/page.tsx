import DetailPage from "@/layouts/DetailPage";

const TOC = [
  { id: "hobbies", label: "Hobbies" },
  { id: "list-100", label: "List 100" },
];

export default function MiscPage() {
  return (
    <DetailPage title="Misc" summary="Things that don't fit anywhere else :)" toc={TOC}>
      <section>
        <h3 id="hobbies">Hobbies</h3>
          <ul className="list-disc pl-6 space-y-2 font-light">
            <li>
              I run an{" "}
              <a
                className="hover:text-blue-500"
                href="https://www.instagram.com/divachefs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram account
              </a>{" "}
              to share my cooking. I am pretty confident that I am a good cook! My specialty is Vietnamese and Asian food.
            </li>
            <li>
              I also love drawing so I document my progress of imperfect work{" "}
              <a
                className="hover:text-blue-500"
                href="https://www.instagram.com/joyfuldrawing_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              :)
            </li>
            <li>Currently rekindling my love for origami and reading</li>
            <li>Sometimes I play chess</li>
          </ul>
        <h3 id="list-100">List 100</h3>
        <ul className="list-none pl-0 space-y-2 font-light">
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Run a coffee popup. Design my own poster and menu of coffee.
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Redesign Hiroshi Ramen menu and website and actually go there and give the menu to them
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> DM <a href="https://x.com/rtwlz" target="_blank" rel="noopener noreferrer">Riley Walz</a> and ask him to join any crazy and adventurous idea her has
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Publish <a href="https://learningcactus.substack.com/" target="_blank" rel="noopener noreferrer">plus minus epsilon</a> - a newsletter on technical deep dives on topics I&apos;m curious about
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Walk to all SFPL branches
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Solve all problems in Cracking the Coding Interview
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Publish instructional game-based tutorials on reinforcement learning
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> DM <a href="https://maryrosecook.com/">Mary Rose</a> Cook for a coffee chat
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Reimplement Git in Python
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Open source Notion + Chrome Extension Integration
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Reach out to <a href="https://jchenwan.com/">Joanna</a>about hosting a Figma event for Minerva students
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Publish an interactive tutorial on JPEG
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Publish an interactive tutorial on KNN
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Reach out to <a href="https://savannah.dev/">Savannah</a> to ask how I can best contribute to Python and actually submit a PR.
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Contribute to React
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Publish a series on technical challenges of products I love and use often (Notion, Spotify, Youtube, Netflix, etc.)
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Finish Designing Data Intensive Applications
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Redesign Goodreads
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create my own digital bookshelf
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> DM 3 designers I admire for coffee chats
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> DM 3 engineers I admire for coffee chats
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Finish Crafting Interpreters
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Ask <a href="https://www.linkedin.com/in/alexjpong/">Paper Son&apos;s owner</a> if I can come and be a barista for a day :)
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Submit a story proposal to the <a href="https://pudding.cool/">Pudding</a>
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> DM a Brilliant engineer to ask how I can stand out if I want to work there as a new grad
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Finish High Performance Python Book
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create a tool based on when2meet but better
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create an interactive DSA explainer
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create a visual story on K-Drama
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create a visual story on the history of computing
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Submit a project to <a href="https://visxai.io/">VISxAI</a> 9th 2026
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create a plugin in Figma
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create an application (not sure what it is for now) that allows me to modify the web directly
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Create something in Blender
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Learn <a href="https://strudel.cc/workshop/getting-started/">Strudel</a>
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Finish <a href="https://natureofcode.com/">The Nature of Code</a>
            </label>
          </li>
        </ul>
      </section>
    </DetailPage>
  );
}
