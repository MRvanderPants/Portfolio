export type Job = {
  role: string;
  skills: string[];
  date_start: string;
  date_end: string;
  clients: string[];
  description: string;
  url?: string;
}

export const jobs: Job[] = [{
  role: 'Fullstack developer',
  skills: ['React', 'Vuejs', 'Angular', 'Typescript', 'NodeJS'],
  date_start: '',
  date_end: '???',
  clients: ['Your office perhaps?'],
  description: `If you're interested in my skills or you think I would be a great fit for your team, feel free to contact me in the form below.`,
}, {
  role: 'Fullstack developer',
  skills: ['React', 'React-native', 'Vuejs', 'Next/ Nuxt', 'Typescript', 'NodeJS'],
  date_start: '2022',
  date_end: '',
  clients: ['Livewall Group'],
  description: `Worked as a full-stack developer on a number of different apps and websites for a large number of customers, with a large variety of technologies.`,
  url: 'https://www.livewall.com',
}, {
  role: 'Software developer',
  skills: ['Angular', 'Typescript', 'RXJS', 'Jest', 'NodeJS', 'Open Layers'],
  date_start: '2019',
  date_end: '2021',
  clients: ['the People Group'],
  description: `Worked as a all-round software engineer on a software package that generates complex underground networks, with a focus on implementing map and interface features.`,
  url: 'https://www.thepeoplegroup.nl/',
}, {
  role: 'Front-end developer',
  skills: ['Ionic', 'Angular', 'Typescript', 'Javascript', 'Vuejs', 'Nunjucks', 'Twig', 'Testcafe', 'React-native'],
  date_start: '2018',
  date_end: '2019',
  clients: ['NoBears'],
  description: `worked as a front-end javascript developer in a web-development office creating both websites, web-apps and hybrid javascript apps for clients both small and large`,
  url: 'https://www.nobears.nl/',
}, {
  role: 'Front-end developer',
  skills: ['Angular', 'Typescript', 'Javascript', 'Snap.svg', 'Autodesk Forge', 'Three.js', 'Jasmine', 'Karma'],
  date_start: '2016',
  date_end: '2017',
  clients: ['Planon Software'],
  description: `worked as a front-end developer in various teams to build the office and facility management software called ‘Planon’. Mostly worked on a cad-viewer plugin to display and use construction drawings inside the Planon-application, and a bim-model viewer, to render 3D models in the browser.`,
  url: 'https://planonsoftware.com',
}, {
  role: 'Game Design intern',
  skills: ['Javascript', 'C#'],
  date_start: '2016',
  date_end: '2017',
  clients: ['Games [4 Therapy] foundation'],
  description: `Created a playful application in Unity (C#) for children in therapy that will replace their paper-based assignments and help them become more motivated to participate in therapy. This was a graduation internship.`
}, {
  role: 'Game Design intern',
  skills: ['Javascript', 'Google Glass', 'jQuery'],
  date_start: '2013',
  date_end: '2014',
  clients: ['Monpellier Ventures', 'REshape Center, Radboud umc Nijmegen', 'GGZe Eindhoven'],
  description: `Designed a game concept for heart-disease patients at the Radboud umc hospital which kept track of nation-wide AED locations. Secondary role as an intern was to handle incoming requests from the medical staff and design solutions for these problems.`,
}];
