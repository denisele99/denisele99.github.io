type Project = {
  name: string
  description: string
  link: string
  images: ProjectImage[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export type ProjectImage = {
  src: string
  alt: string
}

export const PROJECTS: Project[] = [
  {
    name: 'ComputeCast',
    description:`
      GPU planning and benchmarking tool that estimates peak GPU memory, runtime, and cloud cost for training ML models.\n
      Recommends optimizations based on your budget and hardware.
    `,
    link: 'https://denisele99.github.io/compute-cast',
    images: [
      {
        src: '/computecast/computecast_2.png',
        alt: 'ComputeCast GPU planning overview',
      },
      {
        src: '/computecast/computecast_3.png',
        alt: 'ComputeCast benchmark results',
      },
      {
        src: '/computecast/computecast_1.png',
        alt: 'ComputeCast project screenshot',
      },
      {
        src: '/computecast/computecast_4.png',
        alt: 'ComputeCast project screenshot',
      },
      {
        src: '/computecast/computecast_5.png',
        alt: 'ComputeCast project screenshot',
      },
      {
        src: '/computecast/computecast_6.png',
        alt: 'ComputeCast project screenshot',
      },
    ],
    id: 'project1',
  },
  {
    name: 'Evidently',
    description: 'AI-powered web app that helps people evaluate wellness claims using peer-reviewed research.\n 2nd Place at Women in AI Hackathon Nov 2026',
    link: 'https://bright-spec-forge.lovable.app',
    images: [
      { src: '/evidently/evident2.png', alt: 'Evidently research sources' },
      { src: '/evidently/evident3.png', alt: 'Evidently project screenshot' },
      { src: '/evidently/evident4.png', alt: 'Evidently project screenshot' },
    ],
    id: 'project2',
  },
  {
    name: 'Functional Divergence of IDRs',
    description: 'Analyses of functional divergence among intrinsically disordered regions (IDRs) using protein language model embeddings',
    link: 'https://github.com/denisele99/IDR-embed-diverge',
    images: [],
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University of Toronto',
    title: 'Computational Biology Researcher',
    start: '2022',
    end: '2026',
    link: '',
    id: 'work1',
  },
  {
    company: 'University of Toronto',
    title: 'Molecular Biology Teaching Assistant',
    start: '2022',
    end: '2024',
    link: '',
    id: 'work2',
  },
  {
    company: 'University of Waterloo - Mobilize Clinical Biomechanics Lab',
    title: 'Research Assistant',
    start: '2021',
    end: '2022',
    link: '',
    id: 'work3',
    
  },
  {
    company: 'Grand River Foods',
    title: 'Microbiology Lab Assistant and Quality Assurance',
    start: 'Sept 2019',
    end: 'Dec  2019',
    link: '',
    id: 'work4',
    
  },
]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
//   {
//     title: 'How to Export Metadata from MDX for Next.js SEO',
//     description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
//     link: '/blog/example-mdx-metadata',
//     uid: 'blog-4',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/denisele99',
  },

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/denise-le-a6547216a',
  },

]

export const EMAIL = ''
