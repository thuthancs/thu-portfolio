import DetailPage from "@/layouts/DetailPage";
import Image from "next/image";

const TOC = [
  { id: "grant-sanderson", label: "math as a paintbrush for art" },
  { id: "lauren-hom", label: "creativity is not efficient" },
  { id: "waymo", label: "designing for trust" },
  { id: "jayse", label: "the modern film interfaces" },
  { id: "jade-jame", label: "reimagining the future of tech" },
  { id: "brent", label: "the creative process behind brat" },
  { id: "plaid", label: "human craft and connection is the moat" },
  { id: "zach", label: "if you work, it will lead to something" },
  { id: "vicki", label: "listen to your inner creative self" },
  { id: "closing", label: "a recap" },
];

export default function DesignIsCarePage() {
  return (
    <DetailPage
      title="design is care"
      summary=""
      toc={TOC}
    >
      <section id="introduction">
        <figure>
          <Image
            src="/blog/design_is_care_figma_booths.jpg"
            alt="Figma product booths at Config 2026"
            width={3848}
            height={1796}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            figma product booths. they recently introduced figma motion, generative plugins, and new
            capabilities in figma make. you can watch the{" "}
            <a
              href="https://www.youtube.com/watch?v=2ZCc4k_IV5w&t=450s"
              target="_blank"
              rel="noopener noreferrer"
            >
              full keynote on YouTube
            </a>
            .
          </figcaption>
        </figure>
        <p>
          i almost did not go to config because the ticket was too expensive. then, the night before
          the event, someone from my college sent a text message to give away a spare ticket. i
          checked telegram and asked for the it just 5 minutes later. i got very lucky because i
          rarely check messaging apps at night. and i&apos;m so so glad i got to attend the
          conference. i spent the majority of my time there just listening to keynotes and talks
          (not really tried to network, partly because it was too crowded - 10k people!, and partly
          because i did not have the energy to), and they were all so well-designed and spoken!
        </p>
        <p>
          i think it&apos;s a good idea to sit down and write some recap while my memory and
          emotions are still fresh. all the talks and keynotes i decided to attend showed me the
          power of a good AND personal story, intentional slides + visuals, the heart &amp; soul
          these people put into their work, and their belief in humanity. it&apos;s such a
          refeshing experience in san francisco - where you see AI ads about tools
          &quot;promising&quot; to automate human tasks everywhere - to see more than 15 people from
          different backgrounds such as math, music, illustration, and film emphasize the value of
          humans, of the creative processes that are not necessarily efficient, and of how AI should
          amplify our thinking, not taking it away. i left feeling so inspired and having so much
          respect and appreciation for anyone who designs. they might be different but they all
          share one thing, one thing that makes all the difference: they care.
        </p>
      </section>

      <section id="grant-sanderson">
        <h2>when there is an abundance of choices, there is design</h2>
        <figure>
          <Image
            src="/blog/design_is_care_3b1b.jpg"
            alt="Grant Sanderson presenting at Config 2026"
            width={3856}
            height={1842}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            i followed 3B1B when i first studied linear algebra so seeing him in person was such an
            awesome experience! grant showed us how math could be visualized in a way that helps you
            understand a topic more deeply. he said: &quot;when there is an abundance of choices,
            there is design&quot; since that is when you have to think about the audience and the
            tradeoffs each option has. we spent 30 minutes reviewing the concept of the imaginary
            number (i) in the euler&apos;s identity and how it&apos;s applied to make the art piece
            print gallery by m.c.escher. i loved the way he broke down the identity into small pieces,
            and explain the role of each symbol. got to see some cools interactive math and how he
            actually re-created the artwork!
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/blog/math_paper.jpg"
            alt="Math paper at Config 2026"
            width={2999}
            height={2431}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            the math behind the artwork is explained in this paper:{" "}
            <a
              href="https://www.maa.org/press/periodicals/convergence/artful-mathematics-the-heritage-of-m-c-escher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Artful Mathematics: The Heritage of M. C. Escher
            </a>
          </figcaption>
        </figure>
      </section>

      <section id="lauren-hom">
        <h2>creativity is not efficient</h2>
        <figure>
          <Image
            src="/blog/lauren_hom.jpg"
            alt="Lauren Hom at Config 2026"
            width={3737}
            height={1378}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            this talk is from lauren hom. she told a story of transitioning from advertising to
            becoming a full-time freelancer, going to restaurants to pitch herself to handwrite their
            menus in exchange for food (what a genius idea!), and ended up enrolling in a culinary
            school :) she reminds us of self-advocacy - to advocate for your aspirations instead of
            waiting for some external forces to tell us what to do.
          </figcaption>
        </figure>
      </section>

      <section id="waymo">
        <h2>designing for trust</h2>
        <figure>
          <Image
            src="/blog/waymo.jpg"
            alt="Waymo design talk at Config 2026"
            width={3237}
            height={1219}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            this is head of design @ waymo, telling us how they design for trust when it comes to
            autonomous vehicles. he showed us the decisions his team made on how to display humans,
            intersections, and traffic cones and the reasons behind all of them. he even mentioned
            sound engineering - the sound cusomers hear when they open the door or when there is a
            warning. i was again reminded of intentionality and attention to details, which most of
            the time are invisible, that create a truly great user experience.
          </figcaption>
        </figure>
      </section>

      <section id="jayse">
        <h2>the modern film interfaces</h2>
        <figure>
          <Image
            src="/blog/jayse_film.jpg"
            alt="Jayse presenting film interface design at Config 2026"
            width={3762}
            height={1772}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            probably one of the coolest talks! jayse was the person behind many holograms, HUDs, and
            futuristic interface systems of blockbusters such as as top gun. it amazed me when he
            showed us his meticulous artifacts from the more obvious shapes to the tiny little dots,
            all of which he made without using AI at all.
          </figcaption>
        </figure>
      </section>

      <section id="jade-jame">
        <h2>reimagining the future of tech</h2>
        <figure>
          <Image
            src="/blog/music_code.jpg"
            alt="Jade and Jame live coding music at Config 2026"
            width={3774}
            height={1849}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            an amazing talk from jade and jame! they live coded their music using strudel, showed us
            their creative coding projects and shared about their beliefs into a future of more just,
            personalized, and cheap computing/software.
          </figcaption>
        </figure>
      </section>

      <section id="brent">
        <h2>the creative process behind brat</h2>
        <figure>
          <Image
            src="/blog/brat_cover.jpg"
            alt="Brent presenting the brat album cover design at Config 2026"
            width={4032}
            height={1953}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            i loveeeeeeed brent&apos;s presentation so much - very personal, funny, and relatable. he
            was the person behind this viral trend inspired by the album cover he designed: brat. he
            showed us a HUGE collection of images on this laptop and the mockups he made for brat in
            figma. there was one thing he mentioned that stays with me: the actual real work of a
            designer is not sitting on your computer and fixing pixels and hoping that ideas will come
            from nowhere from your mind. it is the work where you get yourself inspired, go outside,
            take pictures, save them, watch TV or consume something and also save them, to the point
            you make such a good curated library that you can reference when the time comes.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/blog/finished_state.jpg"
            alt="Brent on there is no finished state at Config 2026"
            width={3933}
            height={1329}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            there is no finished state is the final message. normally we think of design versions (v0,
            v1, v2, v3, etc.) as progressive versions (v1 should be better than v0, v2 should be
            better than v1) but they are just different explorations they we make to discover how
            certain things should be and how we want them to be.
          </figcaption>
        </figure>
      </section>

      <section id="plaid">
        <h2>human craft and connection is the moat</h2>
        <figure>
          <Image
            src="/blog/plaid.jpg"
            alt="Plaid brand design talk at Config 2026"
            width={3947}
            height={1907}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            a great case study of brand design from plaid. i was genuinely impressed by their design
            team. they did research on the the patterns and design of the US and other countries&apos;
            currencies and studied how those establish trust with the users. chris walked us through
            the process behind &quot; the fraudsters are coming!&quot; campaign and all the artwork
            that is a mix of old and modern styles of design. i also appreciate the fact that he kept
            reminding us how important human connections are by showing their in-person conference and
            coffee shops.
          </figcaption>
        </figure>
      </section>

      <section id="zach">
        <h2>if you work, it will lead to something</h2>
        <figure>
          <Image
            src="/blog/zach.jpg"
            alt="Zach presenting creative coding work at Config 2026"
            width={3943}
            height={1038}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            this talk is from zach - an artist @ mit media lab. he showed us his decade of consistent
            creative coding and sharing his work online. it was so fun seeing him experimenting with
            shades, lighting, and colors.
          </figcaption>
        </figure>
      </section>

      <section id="vicki">
        <h2>listen to your creative inner self</h2>
        <figure>
          <Image
            src="/blog/vicki.jpg"
            alt="Vicki presenting at Config 2026"
            width={4032}
            height={2164}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            this is vicki. her talk was so healing i almost cried. it was about her creative process
            and personal stories writing the book: ask this book a question. she even read a poem at
            the end for us.
          </figcaption>
        </figure>
      </section>

      <section id="closing">
        <h2>Closing thoughts</h2>
        <figure>
          <Image
            src="/blog/design_is_care_extra_1.jpg"
            alt="Speaker on stage with the quote angels appear as what you fear, devils appear as what you desire"
            width={1456}
            height={593}
            className="w-full h-auto object-cover"
          />
          <figcaption>
            angels appear as what you fear. devils appear as what you desire.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/blog/design_is_care_magazine.jpg"
            alt="The Figma magazine at Config 2026"
            width={3887}
            height={2146}
            className="w-full h-auto object-cover"
          />
          <figcaption>some random playground</figcaption>
        </figure>
        <figure>
          <Image
            src="/blog/design_is_care_extra_3.jpg"
            alt="Playground at Config 2026"
            width={2661}
            height={3361}
            className="w-full h-auto object-cover"
          />
          <figcaption>the figma magazine &lt;3</figcaption>
        </figure>
        <p>
          and that&apos;s a wrap for config 2026. this is also my first config! i&apos;m glad i made very
          good choices about my own agenda. i skipped those &quot;corporate&quot;-sound talks
          like agentic workflows to attend those that sparked an interest in me. one interesting
          thing: the most boring talk, which i did not intentionally choose - i was just too tired
          to move to another stage, was from a guy from google lol, i almost dozed off.
        </p>
      </section>
    </DetailPage>
  );
}
