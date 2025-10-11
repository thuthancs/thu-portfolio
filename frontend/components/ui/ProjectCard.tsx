import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  href?: string
}

export default function ProjectCard({ title, description, href }: ProjectCardProps) {
  const content = (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer h-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
