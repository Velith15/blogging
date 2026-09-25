export interface Article {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: 'AI' | 'Building' | 'Startups' | 'Product' | 'Ideas' | 'Lessons' | 'Life';
  featured?: boolean;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'building-in-public',
    number: '01',
    slug: 'im-building-in-public-heres-why',
    title: "I'm Building in Public. Here's Why.",
    subtitle: "What I'm building, what I'm learning, and why I'm documenting the process.",
    date: 'September 25, 2026',
    readTime: '6 min read',
    category: 'Building',
    featured: true,
    content: [
      "Most of the interesting things that happen while building software never make it into the final product. You spend days chasing a bug, refactoring a database query, or testing a hypothesis about how users might interact with a feature, and once it's resolved, you move straight to the next task. The lesson is learned, but the context disappears almost immediately.",

      "I've noticed this pattern in my own work over the past few years. When you're constantly starting projects, testing ideas, breaking things, and trying to figure out what works, the actual process of building becomes a blur. You remember the milestones—the launches, the major rewrites, the big shifts—but you forget the small, daily realisations that actually shaped your thinking.",

      "That's the main reason I decided to build this site and start writing consistently. I wanted a space to capture the process as it happens, rather than trying to reconstruct it years later when everything looks neater than it actually was.",

      "## Why I'm writing",

      "Building things is rarely a straight line. When you start working on an idea, you usually have a clear vision of how it will work, who will use it, and what problems it will solve. But as soon as you start putting real code together or talking to actual users, that clean vision starts to change.",

      "Ideas evolve. Technical constraints show up out of nowhere. Features that seemed essential turn out to be completely unnecessary, and things you almost skipped end up being the core of the product. Sometimes a project just doesn't work out, and you have to abandon it and take what you learned into the next thing.",

      "Writing is my way of slowing down enough to pay attention to those shifts. By documenting what I'm building while I'm actually in the middle of it, I can track how my ideas change over time. It gives me a record of my own thinking, and hopefully, it holds me accountable to finishing what I start.",

      "## I'm still figuring things out",

      "I want to be clear about one thing: this blog is not written by someone who has everything figured out.",

      "I don't have a master playbook for building companies or scaling systems. I'm a student, a founder, and a builder who spends a lot of time sitting at a desk, looking at code, making mistakes, and trying to make sense of what I'm doing.",

      "That's intentional. I think there's already enough content on the internet written by people pretending to be experts with all the answers. Most advice is written in hindsight, where every fortunate coincidence gets reframed as a brilliant strategy. I'd rather document the messy middle—the experiments that fail, the assumptions that turn out to be wrong, and the quiet realisations that come from actually doing the work.",

      "## What I'm building",

      "Right now, most of my energy is focused on building **Maple**, where I serve as Founder & CEO, and specifically working on a project called **Cairn**.",

      "Cairn is a memory layer for AI agents. The core idea comes from a simple problem I kept encountering while working with autonomous systems: AI agents are essentially stateless. Every time an agent runs a task, it starts fresh. It doesn't remember what worked last time, it doesn't remember the edge cases it ran into, and it ends up making the exact same mistakes over and over again.",

      "With Cairn, we're exploring how agents can capture what they do, evaluate the outcomes of their actions, extract useful knowledge, and store that knowledge so they can retrieve it for future tasks. The goal is to help agents learn from experience rather than relying purely on context window hacks or static prompt templates.",

      "I'm also working on **Outbound**, a platform designed to make automated prospect research and outreach far more precise and personal than the generic spam engines that dominate sales today.",

      "I'm not sharing these projects here as a product pitch. They are simply the problems currently keeping me up at night, and they will naturally be the source of many of the ideas I write about here.",

      "## What I'll write about",

      "I don't have a rigid editorial schedule or a curated content strategy. I plan to write about whatever I'm actively thinking about, testing, or wrestling with at any given moment.",

      "That will likely include:",

      "• Building Maple and navigating the early stages of a startup\n• AI agents, memory architectures, and system design\n• Product development, user experience, and technical trade-offs\n• Specific technical and design experiments I'm running\n• Things that worked out, and things that failed completely\n• Lessons learned from shipping code and building in public",

      "Some posts will be technical breakdowns. Others will be shorter reflections on building, studying, or figuring out how to manage time and focus.",

      "## Looking ahead",

      "I don't know exactly where this project will lead, or how my ideas will change six months or a year from now.",

      "That's kind of the point. This site is a public record of the journey—an ongoing notebook from someone who loves building software and wants to share the process along the way.",

      "If you're interested in AI, startups, building products, or just watching someone try to figure things out in real-time, I hope you find something useful here."
    ]
  }
];

export const TOPICS = [
  'All',
  'AI',
  'Startups',
  'Building',
  'Product',
  'Ideas',
  'Lessons',
  'Life'
] as const;
