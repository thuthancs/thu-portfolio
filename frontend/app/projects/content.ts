export interface Project {
    id: string
    title: string
    description: string
    category: string[]
    link?: string
  }
  
  export const projects: Project[] = [
    {
      id: "notion-chrome-extension",
      title: "notion-chrome-extension",
      description: "a collection of notion templates and tutorials integrations",
      category: ["all", "automation"],
    },
    {
      id: "meeting-translator",
      title: "meeting-translator",
      description: "translate your boring meeting notes in different styles",
      category: ["all", "automation", "ai"],
    },
    {
      id: "interview-prep-partner",
      title: "interview-prep-partner",
      description: "find accountability partner for interview prep",
      category: ["all", "fullstack"],
    },
    {
      id: "how-i-develop-this-website",
      title: "how-i-develop-this-website",
      description: "a collection of notion templates and tutorials integrations",
      category: ["all", "fullstack"],
    },
    {
      id: "vietnamese-handwriting",
      title: "vietnamese-handwriting",
      description: "how to generate your own handwriting using ml algorithms",
      category: ["all", "ai"],
    },
    {
      id: "git-clone",
      title: "git-clone",
      description: "learn git internals in-depth by writing git in python",
      category: ["all", "data"],
    },
  ]
  