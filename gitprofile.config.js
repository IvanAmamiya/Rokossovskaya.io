// gitprofile.config.js

const config = {
  github: {
    username: 'IvanAmamiya', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        "ProjectM",
        "OngoingSocket",
        "Rokossovskaya.github.io"
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'svnn175e@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1b_7AXuMqqVp4WI6IV2HTGXO72DE-7GhXuy3m92j7dew/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Vue.js',
    'JavaScript',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Antd-Vue',
  ],
  experiences: [
    {
      company: 'フレストソフト株式会社',
      position: 'Full Stack Engineer',
      from: 'Feb. 2024',
      to: 'Dec. 2024',
      companyLink: 'https://www.forestsoft.jp/',
    },
  ],
  certifications: [
    {
      name:'TOEICテスト',
      body:'895スコア 獲得',
      year:'2024'
    },
    {
      name: '日本語能力試験ーN1',
      body: '合格',
      year: '2021',
    },
    {
      name: 'J.TEST実用日本語検定',
      body: '準B級 獲得',
      year: '2021',
    },
    {
      name: '(中国)大学日本語試験(College Japanese Test)-6級',
      body: '合格',
      year: '2021',
    },
    {
      name: '(中国)大学英語試験(College English Test)-6級',
      body: '合格',
      year: '2020',
    },
    {
      name: '(中国)大学英語試験(College English Test)-4級',
      body: '合格',
      year: '2017',
    }
  ],
  education: [
    {
      institution: '燕山大学',
      degree: '学士',
      from: '2017.9',
      to: '2021.6',
    },
    {
      institution: '広島大学',
      degree: '修士',
      from: '2025.4',
      to: '2027.4',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
/*     {
      title: '電子商店(E-Commerce Shop)',
      description:
        'こちらは、株式会社CODでの勤務中に担当したプロジェクトです。主にVue.js、TypeScript、VueXなどを使用し、フロントエンド部分においてアカウント管理と文章機能のLaravelからVueへの移行を担当しました。さらに、RESTful APIの作成や支払いサービス提供者との連絡、中国語から日本語への翻訳も行いました。',
      imageUrl: 'https://ecshop-bc.haruki.life/catalog/logo.png',
      link: '',
    },
    {
      title: 'フォーラム(WeChat Program)',
      description:
        'Uni-Appで作られたウィチャット学校フォーラムです.Vue3 MongoDBなどを使われました。画像アップロード、投稿、アルバム、WeChatユーザー認証などの機能を実現しました。',
      imageUrl: 'https://play-lh.googleusercontent.com/eOXYfM4C_CJc6hJ9Yxa0q0Xf-O8u03T5af6NdC5vnuYKLnrgsIjEaM4lUK3Mj7gNn7Y',
      link: '',
    }, */

  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
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
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
    languageConfig: {
      defaultLanguage: 'en',
      // Available language. To remove any theme, exclude from here.
      languages: [
        'en',
        'cn',
        'jp',
      ],
    },  
  },

/*   // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`, */
};

export default config;
