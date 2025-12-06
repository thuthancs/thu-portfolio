import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TagGroup = "python" | "javascript/typescript" | "ai/ml" | "data" | "misc" | "other"

export function getTagGroup(label: string): TagGroup {
  const key = label.toLowerCase()

  if (key.includes("python")) return "python"
  if (key.includes("javascript") || key.includes("typescript")) return "javascript/typescript"
  if (key.includes("ai") || key.includes("ml")) return "ai/ml"
  if (key.includes("data")) return "data"
  if (key.includes("misc")) return "misc"

  return "other"
}

export function getTagColorClasses(label: string): string {
  const group = getTagGroup(label)

  switch (group) {
    case "python":
      return "bg-[#4ba3ff]/10 border-[#4ba3ff] text-[#1f2937]"
    case "javascript/typescript":
      return "bg-[#ffbd2e]/10 border-[#ffbd2e] text-[#1f2937]"
    case "ai/ml":
      return "bg-[#27c93f]/10 border-[#27c93f] text-[#1f2937]"
    case "data":
      return "bg-[#e88e9a]/10 border-[#e88e9a] text-[#1f2937]"
    case "misc":
      return "bg-[#d4d2d2]/10 border-[#d4d2d2] text-[#4b5563]"
    default:
      // Default to neutral grey
      return "bg-[#f5f5f0] border-[#d4d2d2] text-[#4b5563]"
  }
}
