export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  hero: string;
  alt: string;
  tags: string[];
  featured?: boolean;
  description: string;
  year: string;
  role: string;
  stack: string[];
  github?: string;
  website?: string;
}

export const projects: Project[] = [
  {
    slug: "smooth-cursor",
    thumbnail: "/projects/smooth-cursor/thumbnail.webp",
    hero: "/projects/smooth-cursor/hero.webp",
    alt: "Smooth Cursor",
    tags: ["MacOS", "Video Editing", "Video recording"],
    title: "Smooth Cursor",
    description:
      "Native macOS screen recorder with auto zoom, a buttery smooth cursor, 3D iPhone mockups, video editing and more.",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Swift", "SwiftUI", "Metal API", "ScreenCaptureKit", "Xcode"],
    github: "https://github.com/ibaifarina/SmoothCursor",
  },
  {
    slug: "ib-studio",
    title: "IB Studio",
    thumbnail: "/projects/ib-studio/thumbnail.webp",
    hero: "/projects/ib-studio/hero.webp",
    alt: "IB Studio website",
    tags: ["Freelance", "Website", "Design"],
    featured: false,
    description:
      "My freelance website, where I offer web design services to local businesses looking to establish or improve their online presence. It showcases a few client and demo projects. Alongside a clear three-tier pricing structure and a simple contact form to kick off new projects..",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Next.js", "TypeScript", "SEO"],
    github: "https://github.com/ibaifarina/IBStudio",
    website: "https://ibstudio.es",
  },
  {
    slug: "omnitrack",
    thumbnail: "/projects/omnitrack/thumbnail.jpg",
    hero: "/projects/omnitrack/hero.png",
    alt: "OmniTrack app",
    tags: ["iOS", "Tracking", "Movies"],
    title: "Omnitrack",
    description:
      "A personal project to track currently watching movies, TV shows and anime, with a focus on user-friendly interface.\
      I built it to learn SwiftUI and Swift and improve UI/UX design skills. It's a combinations of IMDB, TMDB and Anilist APIs integrated to get\
      the latest information about the movies, TV shows and anime.",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Swift", "SwiftUI"],
    github: "https://github.com/ibaifarina/Omnitrack",
  },
  {
    slug: "tempo",
    thumbnail: "/projects/tempo/thumbnail.jpg",
    hero: "/projects/tempo/hero.jpg",
    alt: "Tempo",
    tags: ["MacOS","Music Scores", "Piano"],
    title: "Tempo",
    description:
      "Simple and beautiful scores app to practice piano.",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Swift", "SwiftUI", "Metal API", "Xcode"],
    github: "https://github.com/ibaifarina/Tempo",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    thumbnail: "/projects/personal-portfolio/mockup.jpg",
    hero: "/projects/personal-portfolio/mockup.jpg",
    alt: "Personal portfolio homepage",
    tags: ["Portfolio", "Web", "Bilingual"],
    description:
      "A personal portfolio built with Next.js, React, and TypeScript, featuring scroll animations, responsive design, dynamic project pages, and support for English and Spanish.",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/ibaifarina/personal-portfolio",
    website: "https://ibaifarina.dev",
  },
  {
    slug: "ib-studio-crm",
    title: "IB Studio CRM",
    thumbnail: "/projects/ib-studio-crm/thumbnail.jpg",
    hero: "/projects/ib-studio-crm/thumbnail.jpg",
    alt: "IB Studio CRM dashboard",
    tags: ["Full-stack", "CRM", "SaaS"],
    description:
      "A full-stack CRM for managing lead generation and client outreach, with dashboards, filters, an interactive map, authentication, and per-user data security.",
    year: "2026",
    role: "Developer & Designer",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
] as const;

export const HOMEPAGE_PROJECTS_LIMIT = 3;

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getHomepageProjects() {
  const featured = getFeaturedProject();
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return {
    featured,
    rest: rest.slice(0, HOMEPAGE_PROJECTS_LIMIT - 1),
    hasMore: projects.length > HOMEPAGE_PROJECTS_LIMIT,
  };
}

// export type Project = (typeof projects)[number];

export const experiences = [
  {
    title: "Data Science Student at UPF",
    description:
      "I'm currently studying Data Science at the Universitat Pompeu Fabra, where I'm learning about AI, Data Science, Advanced Math and Statistics and how to apply them to real-world problems.",
    tags: ["AI", "Data Science", "Advanced Math and Statistics"],
    period: "2025 — Present",
  },
  {
    title: "Freelance website developer",
    description:
      "Building websites for clients and businesses to help them showcase their products and services.",
    tags: ["Web design", "Figma", "SEO", "Sales"],
    period: "Present",
  },
] as const;

export const skills: Record<string, readonly string[]> = {
  Skills: ["Web design & development", "UI/UX design", "iOS & MacOS development", "Data Science"],
  Languages: ["Python", "TypeScript", "C++", "Swift", "Java"],
  Frameworks: ["React", "Next.js", "SwiftUI", "Tailwind CSS"],
  Tools: ["Vercel", "Supabase", "GitHub", "Figma", "Cursor"],
};
