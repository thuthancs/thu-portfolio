import DetailPage from "@/layouts/DetailPage";


const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "everyone-has-a-story", label: "Everyone has a story" },
  { id: "structure-that-tests", label: "Structure That Tests True Mastery" },
  { id: "what-taste-means", label: "What \"Taste\" Actually Means" },
  { id: "lessons-beyond-kitchen", label: "Lessons Beyond the Kitchen" },
];

export default function CCWReviewPage() {
  return (
    <DetailPage
      title="Why everyone should watch Culinary Class Wars"
      summary="A reflection on taste, mastery, and the lessons we can learn from a cooking show."
      toc={TOC}
    >
      <section id="introduction">
        <p className="text-sm italic mb-4">[Spoiler Alert]</p>
        <p>
          It was the night I submitted my last assignment of the semester, a great excuse to binge-watch something on Netflix. Culinary Class Wars (CCW) popped up as one of the top-ranked shows. Then, here I was, in just one night, curling up in bed, getting emotional, crying, and laughing, watching CCW more than any K-dramas had ever made me. That was when I realized this isn&apos;t simply a cooking show. It&apos;s an incredibly well-executed production that everyone would learn a great deal from.
        </p>
      </section>

      <section id="everyone-has-a-story">
        <h2>Everyone has a story</h2>
        <p>
          One of the reasons I love the show so much is that I see myself in many of the <em>stories</em> of the people who participated, and I admire those who have faced numerous challenges yet remain resilient. The chefs don&apos;t come to the show to just cook; they come to share their stories and journeys with the world. And it&apos;s their experiences that make them who they are, all of which are reflected in their dishes. I remember crying when a Black Spoon chef talked about wanting his kid back home to be proud of him, about his dream of opening a café staffed by people with disabilities. Whenever someone shared that they had tried their hardest and had no regrets, I could feel the authenticity radiating from them.
        </p>
        <p>
          Watching the show, you&apos;ll also see people whose expertise ranges from traditional Korean cuisine (Seoul Mother) to temple cuisine (Venerable Sunjae), as well as Japanese, Chinese, and French cuisines, which makes audiences like me curious to see what they bring to the table. Watching them explain their dishes and techniques made me realize how much thought and intention go into their cooking. It&apos;s all about having an idea, then executing it really well.
        </p>
      </section>

      <section id="structure-that-tests">
        <h2>Structure That Tests True Mastery</h2>
        <p>
          Another reason I love the show is how well it is written and produced. It is a perfect combination of individual and team effort, constraints, and varying levels of difficulty. Each round is an opportunity to truly assess a chef&apos;s skill and ability. For example, there is one round where the chefs are allowed to use one main ingredient and 10 other supporting ingredients. This evaluates how well they can come up with a delicious dish under a constraint.
        </p>
        <p>
          There is another round where the chefs have to team up with someone; the judging criteria are how well they harmonize the dish, such that each of their styles shines without overwhelming the other. There are chefs who are very skilled, but because the synergy wasn&apos;t there, they were eliminated.
        </p>
        <p>
          Then there&apos;s the team challenge: groups of six or seven cooking for approximately one hundred people. Suddenly it&apos;s about strategy, about reading your audience, about knowing when to pursue your artistic vision versus when to aim for broader appeal. This is when you need to let go of your ego to survive.
        </p>
      </section>

      <section id="what-taste-means">
        <h2>What &quot;Taste&quot; Actually Means</h2>
        <p>
          Before CCW, I&apos;d heard people in design and software circles talk about &quot;taste&quot; versus &quot;AI slop,&quot; but I never fully grasped what they meant. The show made it click for me.
        </p>
        <p>
          There&apos;s a battle between two chefs - one a perfectionist with two Michelin stars, the other known for his bold, rebellious style. They have fundamentally different tastes, and this is evident in everything they create. The rebellious chef won that round because his dish offered a unique, refreshing experience, while the perfectionist&apos;s dish, though impeccably executed, felt familiar.
        </p>
        <p>
          Here&apos;s what struck me: neither approach is objectively better.
        </p>
        <p>
          In real life, they&apos;d serve different customers, and both would thrive. What matters is that each chef knows their style intimately and commits to it fully. They&apos;re not trying to be each other. They&apos;re not hedging their bets. They&apos;ve developed a clear point of view through years of practice and refinement.
        </p>
        <p>
          That&apos;s taste - a certainty born from experience, a confidence that allows you to make bold choices and stand by them.
        </p>
      </section>

      <section id="lessons-beyond-kitchen">
        <h2>Lessons Beyond the Kitchen</h2>
        <p>
          There is a wealth of wisdom that comes into play in the judging process, and a lot of what Chef Sung Ahn said, I believe, is applicable to many other contexts, not just in the kitchen. There was a battle between two Chinese cuisine experts. One dish was very simple in terms of ingredients but required great technique, and the other was more complex in terms of ingredients. The winner was the former.
        </p>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
          <p>
            If you find it hard to keep it simple and continue to add things, you can just tell. You add more because you feel unsure. But this dish was full of confidence. The cooking was on point. The flavor and details were carefully calculated. - Chef Ahn
          </p>
        </blockquote>
        <p>
          After hearing that, I have this urge to pursue such mastery, the level where you are so confident in what you do that you know less is actually more if you think it through carefully. How much practice and experience must a chef undergo to reach that level?
        </p>
        <p>
          Coming from an engineering and computer science background, I am just so surprised at how much wisdom I take away from a cooking show. I&apos;ve learned that nothing can beat hard work, consistency, and experimentation; you have to learn through trials and errors, often not just a one-off thing. It&apos;s about releasing early and often, and learn from user feedback to develop a product that provides true value. I&apos;ve learned that constraints encourage creativity: how many dishes can you make with just one main ingredient? How can you make this ingredient shine with just a few supporting ingredients? It&apos;s like building software with a bunch of constraints in terms of cost and data privacy - but those are the conditions that nurture creativity. Under those constraints, you&apos;ll think about how to make your algorithms run faster without consuming much memory or a cheaper solution to get the same result. I&apos;ve learned about having a <em>taste</em> (which requires time and patience), and I&apos;ve also learned what it truly means to tend to your <em>craft</em>.
        </p>
        <p>
          Now I do love the Gen Z slang when they say: let them <em>cook :)</em> because cooking is a real deal!
        </p>
        <p>
          As 2025 comes to a close, I am eager to carry these lessons forward. A year of more hard work and creativity &lt;3
        </p>
      </section>
    </DetailPage>
  );
}
