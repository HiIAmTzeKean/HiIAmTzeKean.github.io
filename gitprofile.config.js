// gitprofile.config.js

const config = {
  github: {
    username: 'HiIAmTzeKean', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ngtzekean',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'ngtzekean',
    dribbble: '',
    behance: '',
    medium: 'ngtzekean',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'ngtzekean',
    website: '',
    phone: '',
    email: 'ngtzekean600@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/HiIAmTzeKean/HiIAmTzeKean/blob/Master/Resume%20Tze%20Kean.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C',
    'Java',
    'PostgreSQL',
    'Git',
    'Github'
  ],
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
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PQZFFXUZW6GZ'
    },
  ],
  education: [
    {
      institution: 'Nanyang Technological University Singapore',
      degree: 'Degree',
      from: '2021',
      to: '2025',
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
    {
      institution: 'Fuhua Secondary School',
      degree: 'O-Level',
      from: '2013',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /* {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },*/
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'ngtzekean', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
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

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
