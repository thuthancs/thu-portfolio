import Image from "next/image";
import "../app/globals.css";

export default function Header() {
  return (
    <div className="header-container">
      {/* LEFT: Name + hover popover */}
      <div className="name-hover">
        <h1 className="site-title">Thu Than</h1>

        <div className="name-popover">
          <Image
            src="/assets/flags.png"
            alt=""
            width={160}
            height={40}
            className="flags"
            draggable={false}
          />
          <p className="name-caption">
            i grew up in vietnam &amp; have lived in 4 cities while studying
            computer science at minerva
          </p>
        </div>
      </div>

      {/* RIGHT: Contact icons */}
      <nav className="contact-info">
        <a href="mailto:than@uni.minerva.edu" aria-label="Email">
          <Image
            src="/contact_icons/gmail_icon.svg"
            alt="Email"
            width={28}
            height={28}
            draggable={false}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/thananhthu/"
          aria-label="LinkedIn"
        >
          <Image
            src="/contact_icons/linkedin_icon.svg"
            alt="LinkedIn"
            width={28}
            height={28}
            draggable={false}
          />
        </a>

        <a href="https://github.com/thuthancs" aria-label="GitHub">
          <Image
            src="/contact_icons/github_icon.svg"
            alt="GitHub"
            width={28}
            height={28}
            draggable={false}
          />
        </a>

        <a
          href="https://substack.com/@thuthancs?"
          aria-label="Substack"
        >
          <Image
            src="/contact_icons/substack_icon.svg"
            alt="Substack"
            width={28}
            height={28}
            draggable={false}
          />
        </a>
      </nav>
    </div>
  );
}
