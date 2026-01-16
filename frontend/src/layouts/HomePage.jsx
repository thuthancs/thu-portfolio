import Image from "next/image";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

export default function HomePage() {
  return (
    <>
      {/* Header (matches .header-container block in index.html) */}
      <Header />

      {/* Hero (matches <section class="hero"> ... </section>) */}
      <section className="hero">
        {/* LEFT */}
        <div className="hero__left">
          {/* Command hover */}
          <div className="command-hover">
            <Image
              src="/assets/command.svg"
              alt=""
              width={200}
              height={200}
              className="command command--default"
              draggable={false}
            />
            <Image
              src="/assets/tilted_command.svg"
              alt=""
              width={200}
              height={200}
              className="command command--hover"
              draggable={false}
            />
            <p className="command-caption">my most used shortcut (i think) lol...</p>
          </div>

          {/* Avatar hover */}
          <div className="avatar-hover">
            <Image
              src="/assets/profile_sticker.png"
              alt=""
              width={220}
              height={220}
              className="avatar avatar--default"
              draggable={false}
            />
            <Image
              src="/assets/avatar_heart.svg"
              alt=""
              width={220}
              height={220}
              className="avatar avatar--hover"
              draggable={false}
            />
            <p className="avatar-caption">
              i enjoy all acts of craftsmanship –<br />
              code, design, and write
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="hero__center">
          {/* Badge hover */}
          <div className="badge-hover">
            <div className="badge-group">
              <div className="badge-critters">
                <p className="badge-caption">
                  hey beautiful, remember to drink some water and go out for a walk &lt;3
                </p>

                <div className="badge-critters-row">
                  <Image src="/assets/chicken.svg" alt="" width={80} height={80} className="critter" />
                  <Image src="/assets/cat.svg" alt="" width={80} height={80} className="critter" />
                  <Image src="/assets/dog.svg" alt="" width={80} height={80} className="critter" />
                </div>
              </div>

              <div className="hero__badge badge-tilt">Design Engineer Portfolio</div>
            </div>
          </div>

          <h2 className="hero__headline">
            building <strong>creative</strong>, <strong>playful</strong>, <strong>data-driven</strong>{" "}
            software that brings joy, understanding, and clarity.
          </h2>

          <div>
            <Image
              src="/assets/tagline.svg"
              alt=""
              width={300}
              height={120}
              style={{ height: "auto" }}
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__right">
          <div className="bar-hover">
            <Image
              src="/assets/tech_stack_bar.svg"
              alt=""
              width={240}
              height={420}
              className="bar bar--default"
              draggable={false}
            />
            <Image
              src="/assets/tilted_bar.svg"
              alt=""
              width={240}
              height={420}
              className="bar bar--hover"
              draggable={false}
            />
            <p className="bar-caption">
              my frontend tech stack.<br />
              (JS/TS, HTML/CSS, TailwindCSS,<br />
              React, Next.js, Figma)<br />
              i am also proficient in python
            </p>
          </div>
        </div>
      </section>

      {/* Bottom menu (matches <nav class="bottom-menu"> in index.html) */}
      <MenuBar />
    </>
  );
}
