export interface Project {
  id: number;
  title: string;
  image: string;
  languages: string[];
  description: string;
  duration: string;
  type: ProjectType;
  teamSize: string;
  content: string[];
  logo: string;
  screenshots?: string[];
  screens?: string[];
}

export type ProjectType = 'Enterprise software' | 'Android / iOS Application';

export const projects: Project[] = [
  {
    id: 4,
    type: 'Enterprise software',
    title: 'Geofiber',
    image: '../../assets/gfx/geofiber/geofiber.jpg',
    languages: [
      'angularjs',
      'typescript',
    ],
    duration: 'Multiple years',
    teamSize: 'Between 6 and 15',
    description: 'A planning tool to generate complex underground networks for fiber, heat and sewage for whole neighbourhoods and cities at a time.',
    content: [
      'Geofiber was quite an interesting project for me, as this was the first time I dipped my toes in Node back-end development. Due to the fact that the whole application was written in Typescript this transition went very smoothly, and I was able to quickly participate in the team as a full-stack developer.',
      'In my day to day activities working on the application I focussed on creating UIs for new features, pushing and parsing data to and from our Python application and handle map interactions using the OpenLayers framework. Due to this there was a lot of variation in working on this project, and every developer was expected to be able to work on each part of the application, which greatly increased my skills as a developer.'
    ],
    logo: '../../assets/gfx/geofiber/logo.png',
    screens: [
      '../../assets/gfx/geofiber/geofiber.png',
    ],
  }, {
    id: 3,
    type: 'Android / iOS Application',
    title: 'Switch the Gym',
    image: '../../assets/gfx/switch_the_gym/Switch1.jpg',
    languages: [
      'react',
    ],
    duration: '5 months',
    teamSize: 'Solo',
    description: 'A membership and scheduling app for a new gym concept centered around flexible group training sessions.',
    content: [
      'When this project started, Switch the Gym was a brand new fitness and gym concept, and was looking for an easy way for their customers to enroll in group training classes. During these classes the participants data would be measured and recorded using special equipement and send directly to the app so that the user could easily track their progress.',
      'This app was also my first React-native app, so this project was quite the learning exercise. Luckily due to having some Angular and Ionic experience already I was able to quickly build a first proof of concept in a matter of days, so that I could then focus on making the app more robust and add a bunch of new features.'
    ],
    logo: '../../assets/gfx/switch_the_gym/logo.png',
    screenshots: [
      '../../assets/gfx/switch_the_gym/screenshot0.jpg',
      '../../assets/gfx/switch_the_gym/screenshot1.jpg',
    ],
    screens: [
      '../../assets/gfx/switch_the_gym/screen0.png',
      '../../assets/gfx/switch_the_gym/screen1.png',
      '../../assets/gfx/switch_the_gym/screen2.png',
      '../../assets/gfx/switch_the_gym/screen3.png',
      '../../assets/gfx/switch_the_gym/screen4.png',
    ],
  }, {
    id: 2,
    type: 'Android / iOS Application',
    title: 'Mijn van Mossel',
    image: '../../assets/gfx/VanMossel1.jpg',
    languages: [
      'angularjs',
      'typescript',
    ],
    teamSize: 'Solo',
    duration: '3 months',
    description: 'An app to schedule maintanance and repairs for your lease vehicle. Also used to supply customers with additional information and promotions.',
    content: [
      'Van Mossel is one of the largest car dealerships in the Netherlands, and for their lease business they were looking for an app that would make it easy for their customers to schedule maintanance or request repairs to their vehicle. The app would also be used by the company itself to promote new features and deals and to improve the communication with their customers.',
      'This app was the first hybrid app project I have worked on, and was made in Angular and Ionic. Ionic offers its own component library, making this type of project very accessible for new developers, as components are automatically styled based on the end-users platform of choice. This gave me more time to focus more on other parts of development like performance, usability and analytics.',
    ],
    logo: '../../assets/gfx/vanmossel/logo.png',
    screenshots: [
      '../../assets/gfx/vanmossel/screenshot0.jpg',
      '../../assets/gfx/vanmossel/screenshot1.jpg',
    ],
  }, {
    id: 1,
    type: 'Enterprise software',
    title: 'Planon BIM Viewer',
    image: '../../assets/gfx/planon/Planon2.jpg',
    languages: [
      'angularjs',
      'typescript',
    ],
    teamSize: 'Between 4 and 6',
    duration: 'Multiple years',
    description: 'An internal plugin package to render BIM 3D models in the larger web application. Mostly used by maintanance staff to track down objects that needed to be repaired.',
    content: [
      'The BIM viewer was used in the encapsulating office and facility management software called Planon, where 3D models of buildings could be viewed and explored. This viewer was optimized for use on tablets, so that people working with the software could easily access the models. An repair man could use the build-in gyroscope controlls to look around the building to find the parts that would need to be repaired or replaced, and easily toggle certain layers on or off for ease of viewing.',
      'Using Autodesk Forge and Three.js we were able to render complex 3D BIM Models and add various features with great ease. Navigating and interacting with the model would in large parts already be handled by the Autodesk framework, and we would only have to expand on this to make the viewer usable on tablets, and add the features we needed.',
    ],
    logo: '../../assets/gfx/planon/logo.png',
  }, {
    id: 0,
    type: 'Enterprise software',
    title: 'Planon CAD Viewer',
    image: '../../assets/gfx/planon/Planon1.jpg',
    languages: [
      'angularjs',
      'typescript',
    ],
    teamSize: 'Between 6 and 8',
    duration: 'Multiple years',
    description: 'An internal plugin package to render CAD drawings as SVGs in the larger web application. Mostly used for various facility management features.',
    content: [
      'One of two specific plugins I have worked on whilst working at Planon, the CAD viewer was used to parse and display CAD drawing in a SVG format. Using an engine written in C, CAD drawings would be converted to SVG and passed along to the application. Once there, we would add functionality to it by creating an overarching API that could be used by other development teams in the company to create their own features.',
      'My job at Planon Software was my first job after graduating university. I started of as a blank canvas, and was able to develop a robust skillset in Angular and Typescript whilst diving into this very complex application. Due to all my daily activities revolving around Typescript I also started favoring working with Javascript over other languages like C# due to its flexibility and ease of use.',
    ],
    logo: '../../assets/gfx/planon/logo.png',
  }, {
    id: 5,
    type: 'Android / iOS Application',
    title: 'DPG Kranten Bezorgen',
    image: '../../assets/gfx/dpg_bezorg/dpg_overview.jpg',
    languages: [
      'react',
    ],
    duration: '3 months',
    teamSize: '2',
    description: 'An app with which newspaper deliverers kan easily check their routes, even offline.',
    content: [
      'Before this app was created, newspaper deliverers would have to check their route using an old spreadsheet, which didn\'t really lend itself very well for mobile devices. To solve this, DPG wanted an app in which deliverers could easily access and view their routes and any special information related to those routes, like if someone ordered two newspapers for instance.',
      'The thing that made this project challenging was that DPG wanted to have the delivery routes be always available. This meant that we had to store a large amount of data locally on a users device to make sure a deliverer could access even when they weren\'t connected to the internet. We used WatermelonDB for react-native to create a local database to store all the related data in.',
      'Due to this setup with the local database, we were able to store large amounts of data on the users device and access that information quickly because the data was properly separated in tables using relations. So it was very easy to query data and the corresponding data from other tables.',
    ],
    logo: '../../assets/gfx/dpg_bezorg/logo.png',
    screenshots: [
      '../../assets/gfx/dpg_bezorg/screenshot0.jpg',
      '../../assets/gfx/dpg_bezorg/screenshot1.jpg',
    ],
    screens: [
      '../../assets/gfx/dpg_bezorg/screen0.png',
      '../../assets/gfx/dpg_bezorg/screen1.png',
      '../../assets/gfx/dpg_bezorg/screen2.png',
      '../../assets/gfx/dpg_bezorg/screen3.png',
    ],
  }, {
    id: 6,
    type: 'Android / iOS Application',
    title: 'Basic Fit All-in',
    image: '../../assets/gfx/bf_all_in/bf_overview.jpg',
    languages: [
      'react',
    ],
    duration: '5 months',
    teamSize: '4',
    description: 'An app for working out and keeping track of your progress on a fitness bicycle at home.',
    content: [
      'Using this app, users are able to participate in live streamed workouts, or prerecorded video lessons on their own fitness bicycle from home. The app also tracks the users progress per workout using a bluetooth connection with the bike and visualises that information in a clear and consise way.',
      'While I was onboarded on this project mid-way, I was still able to contribute quite a bit on this project and more importantly I was able to learn a lot as well, like how to establish connections with other devices like the fitness bikes and tv screens, and I was able to gain more experience in streaming in-app video content.',
      'In this app a user is able to stream workout video\'s, livestreams and youtube video\'s and all these different types of content had to be displayed with a similar look and feel so nothing felt out of place to the user and while also maintaining a lot of the same features for each type. Each type of video content had to be able to be cast to an external tv screen for instance.',
    ],
    logo: '../../assets/gfx/bf_all_in/logo.png',
    screens: [
      '../../assets/gfx/bf_all_in/screen0.png',
      '../../assets/gfx/bf_all_in/screen1.png',
      '../../assets/gfx/bf_all_in/screen2.png',
      '../../assets/gfx/bf_all_in/screen3.png',
    ],
  }, {
    id: 7,
    type: 'Android / iOS Application',
    title: 'Timechimp',
    image: '../../assets/gfx/timechimp/timechimp_preview.jpg',
    languages: [
      'react',
    ],
    duration: '4 months',
    teamSize: '2',
    description: 'An app to easily track and manage working hours and expenses for employees.',
    content: [
      'This app is an upgrade to the existing app, which was an extension to the Timechimp web platform for hour registration and employee management. Employees can use this app to track their working hours, request leave and check their schedule. Using different types of graphs the user can also easily track their progress on certain projects.',
      '',
      '',
    ],
    logo: '../../assets/gfx/timechimp/logo.png',
    screenshots: [
      '../../assets/gfx/timechimp/screenshot0.jpg',
      '../../assets/gfx/timechimp/screenshot1.jpg',
    ],
    screens: [
      '../../assets/gfx/timechimp/screen0.png',
      '../../assets/gfx/timechimp/screen1.png',
      '../../assets/gfx/timechimp/screen2.png',
      '../../assets/gfx/timechimp/screen3.png',
    ],
  },
];