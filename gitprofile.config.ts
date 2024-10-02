// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HiIAmTzeKean', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FYP: Streamsight',
          description:
            'A toolkit for offline evaluation of recommender systems',
          imageUrl:
            'https://raw.githubusercontent.com/HiIAmTzeKean/Streamsight/refs/heads/master/docs/source/_static/logo.png',
          link: 'https://github.com/HiIAmTzeKean/Streamsight',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ng Tze Kean',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ngtzekean',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'ngtzekean',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ngtzekean',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'ngtzekean',
    website: '',
    phone: '+6582288710',
    email: 'ngtzekean@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/HiIAmTzeKean/HiIAmTzeKean/blob/Master/Resume%20Tze%20Kean.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['Python', 'C', 'C++', 'Java', 'SQL', 'Git'],
  experiences: [
    {
      company: 'ADDX',
      position: 'Data Analyst Intern',
      from: 'Jun 2023',
      to: 'Dec 2023',
      companyLink: 'https://addx.co',
    },
    {
      company: 'Wiz.AI',
      position: 'Finance Intern',
      from: 'May 2023',
      to: 'Jun 2023',
      companyLink: 'https://www.wiz.ai',
    },
    {
      company: 'Nanyang Technological University Singapore',
      position: 'URECA',
      from: 'August 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'REANGLE (Startup)',
      position: 'Data Analytics Intern (Sustainability)',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://www.reangle.co',
    },
  ],
  certifications: [
    {
      name: 'Google Data Analytics',
      body: 'Those who earn the Google Data Analytics Professional Certificate have completed eight courses, developed by Google.',
      year: 'Jan 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PQZFFXUZW6GZ',
    },
  ],
  educations: [
    {
      institution: 'Nanyang Technological University Singapore',
      degree: 'Degree',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Shanghai Jiao Tong University',
      degree: 'Non-Graduating student',
      from: '2024',
      to: '2024',
    },
    {
      institution: 'Tsinghua University',
      degree: 'Non-Graduating student',
      from: '2023',
      to: '2023',
    },
    {
      institution: 'National University Singapore',
      degree: 'Non-Graduating student',
      from: '2023',
      to: '2023',
    },
    {
      institution: 'Pioneer Junior College',
      degree: 'A-Level',
      from: '2017',
      to: '2018',
    },
  ],
  achievements: [
    {
      year: '2024',
      award: 'Genk Capital Scholarship',
      awarder: 'Nanyang Technological University Singapore',
    },
    {
      year: '2023',
      award: 'Tan Sri Runme Shaw Scholarship',
      awarder: 'Nanyang Technological University Singapore',
    },
    {
      year: '2023',
      award: 'STUD Hackathon Champions',
      awarder: 'SUTD',
    },
    {
      year: '2023',
      award: 'ICH Bursary',
      awarder: 'ICH Group',
    },
    {
      year: '2023',
      award: 'NTU President Research Scholar',
      awarder: 'Nanyang Technological University Singapore',
    },
    {
      year: '2023',
      award: 'NTU Computer Science Dean List',
      awarder: 'Nanyang Technological University Singapore',
    },
    {
      year: '2022',
      award: 'NTU Computer Science Dean List',
      awarder: 'Nanyang Technological University Singapore',
    },
    {
      year: '2019',
      award: 'Sword of Honour',
      awarder: 'OCS Logistics Training Institute',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'ngtzekean', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
