import DetailPage from "@/layouts/DetailPage";
import Image from "next/image";


const TOC = [
  { id: "looking-back", label: "Looking back at 2025" },
  { id: "what-i-learned", label: "True learning comes when you take the courage to expose your flaws", depth: 1 },
  { id: "understanding", label: "Design for people, not for youself", depth: 1},
  { id: "self-acceptance", label: "To embrace the multitudes within myself", depth: 1},
  { id: "looking-forward", label: "Looking forward" },
];

export default function ReflectionOn2025Page() {
  return (
    <DetailPage
      title="Reflection on 2025"
      summary="You cannot connect the dots looking forward. You can only connect them looking backward."
      toc={TOC}
    >
      <section id="looking-back">
        <Image
          src="/blog/reflection_2025.jpg"
          alt="Reflection 2025"
          width={760}
          height={480}
          className="w-full h-auto object-cover"
        />
        <h2>Looking back at 2025</h2>

        <h3 id="what-i-learned">True learning comes when you take the courage to expose your flaws</h3>
        <p>
          I go to a university that is built on the science of learning principles: teaching students how to learn and think actively.
          After 3 years studying here, I have learned systems and techniques that help me learn better but it was not until this year that I truly understood one important element of learning: courage.
          I don&apos;t think people talk enough about this emotional side of learning. To truly learn something, you have to be willing to expose your flaws and mistakes. 
          It is the courage to put youself out there to seek what&apos;s the current system does not provide.
        </p>
        <p>For example, we talk a lot about feedback - how true learning comes with timely feedback from people who are experts or better than you at something.
          It is something we take for granted at schools because...obviously, teachers must provide feedback for students. But when we are no longer in that system,
          we have to take the initiative to seek feedback ourselves. I admire those who are brave enough to learn in public, to expose the flaws in their thinking.
        </p>
        <h3 id="understanding">Design for people, not for youself</h3>
        <p>I will never forget a conversation I had with my capstone advisor where he gave me a piece of valuable feedback.</p>
        <p>I have been developing this tutorial that helps beginners understand reinforcement learning via games and when I thought my explanation about the mathematical formula for an algorithm was clear and helpful, he told me: 
          &quot;Your explanation is great at showing people that YOU understand the concept but it does not help THEM to understand it.
          Ask yourself what was the process you had to go through to understand the formula and guide people through that same process.&quot;
        </p>
        <p>A feedback so simple yet so enlightening. I realized a lot of times, we teach by showing people the final states when we already understand something.
          Things almost always seem obvious once we understand them but the journey to get there is often not.
          As a result, we should always think about who we design for, not what we think is cool.
        </p>
        <h3 id="self-acceptance">To embrace the multitudes within myself</h3>
        <p>
          This year, I have also learned that I am generally a very curious person and I love art, design, cooking, and many other things.
          I used to tame the artistic, emotional and creative side inside me because I thought I has to be logical and rational to be successful in tech.
          But then I realized those aspects of self are not necessarily mutually exclusive. I can both work with numbers and be an artist.
          It took some experiments and sleepless nights to finally embrace that. And I am so glad I did because I now have more energy and joy doing different things.
        </p>
        <h2 id="looking-forward">Looking forward</h2>
        <p>
          As I look forward to 2026, I want to build and create more. I remember one night I could not sleep so I opened my notes and wrote one line:
          This year, I want to become great at coding, designing and drawing - not good but great.
          Those are things I believe require a great deal of attention and practice but I am more excited than ever to put in the hours.
        </p>
      </section>
    </DetailPage>
  );
}

