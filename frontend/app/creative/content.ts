export interface CreativeProject {
    id: string
    title: string
    description: string
    categories?: string[]
    link?: string
  }
  
  export const creativeProjects: CreativeProject[] = [
    {
      id: "redesign-google-calendar",
      title: "redesign-google-calendar",
      description: "a better planning and tracking tool for personal productivity",
      categories: ["design", "productivity"],
    },
    {
      id: "git-poem",
      title: "git-poem",
      description: "one poem a day, keep the sadness away",
      categories: ["creative", "writing"],
    },
    {
      id: "story-we-write-together",
      title: "story-we-write-together",
      description: "a creative experiment where people on the internet complete a story together :)",
      categories: ["creative", "social"],
    },
    {
      id: "redesign-google-maps",
      title: "redesign-google-maps",
      description: "i wish google maps were safer for women",
      categories: ["design", "social-impact"],
    },
    {
      id: "nature-emergent-beauty",
      title: "nature-emergent-beauty",
      description: "beauty emerges from individual interactions",
      categories: ["creative", "art"],
    },
    {
      id: "how-large-is-llm",
      title: "how-large-is-llm",
      description: "a visual tool to tell you how large is a large language model",
      categories: ["visualization", "ai"],
    },
  ]
  