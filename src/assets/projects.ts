export interface Project {
  id: number;
  title: string;
  image: string;
  languages: string[];
  description: string;
  duration: string;
  type: string;
  teamSize: string;
  content: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    type: 'Enterprise software',
    title: 'Geofiber',
    image: '../../assets/gfx/geofiber.png',
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
  }, {
    id: 1,
    type: 'Android / iOS Application',
    title: 'Switch the Gym',
    image: '../../assets/gfx/Switch1.jpg',
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
  }, {
    id: 3,
    type: 'Enterprise software',
    title: 'Planon BIM Viewer',
    image: '../../assets/gfx/Planon1.jpg',
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
  }, {
    id: 4,
    type: 'Enterprise software',
    title: 'Planon CAD Viewer',
    image: '../../assets/gfx/Planon1.jpg',
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
  }
];