import Image from "next/image";

export default function ContactGrid() {
  return (
    <div className="flex gap-8 justify-center items-center mt-8 w-full">
      <a href="https://www.linkedin.com/in/thananhthu/" className="hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
        <Image
          src="/contact_icons/linkedin_icon.svg"
          alt="LinkedIn"
          width={28}
          height={28}
        />
      </a>
      <a href="https://github.com/thuthancs" className="hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
        <Image
          src="/contact_icons/github_icon.svg"
          alt="GitHub"
          width={28}
          height={28}
        />
      </a>
      <a href="than@uni.minerva.edu" className="hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
        <Image
          src="/contact_icons/mail_icon.svg"
          alt="Email"
          width={28}
          height={28}
        />
      </a>
      <a href="https://learningcactus.substack.com/" className="hover:opacity-70 transition-opacity">
        <Image
          src="/contact_icons/substack_icon.svg"
          alt="Substack"
          width={28}
          height={28}
        />
      </a>
    </div>
  );
}