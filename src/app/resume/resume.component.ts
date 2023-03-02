import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public jobs = [{
    role: 'Fullstack developer',
    skills: ['React', 'React-native', 'Vue', 'Next/ Nuxt', 'Typescript', 'NodeJS'],
    date_start: '2021',
    date_end: '',
    clients: ['Livewall Group'],
    description: `Working as a all-round software engineer on a software package that generates complex underground networks, with a focus on implementing map and interface features.`
  }, {
    role: 'Software developer',
    skills: ['Angular', 'Typescript', 'RXJS', 'Jest', 'NodeJS'],
    date_start: '2019',
    date_end: '2021',
    clients: ['the People Group'],
    description: `Working as a all-round software engineer on a software package that generates complex underground networks, with a focus on implementing map and interface features.`
  }, {
    role: 'Front-end developer',
    skills: ['Ionic', 'Angular', 'Typescript', 'Javascript', 'Vuejs', 'Nunjucks', 'Twig', 'Testcafe'],
    date_start: '2018',
    date_end: '2019',
    clients: ['NoBears'],
    description: `Working as a front-end javascript developer in a web-development office creating both websites, web-apps and hybrid javascript apps for clients both small and large`
  }, {
    role: 'Front-end developer',
    skills: ['Angular', 'Typescript', 'Javascript', 'Snap.svg', 'Autodesk Forge', 'Three.js'],
    date_start: '2016',
    date_end: '2017',
    clients: ['Planon Software'],
    description: `Working as a front-end developer in various teams to build the office and facility management software called ‘Planon’. Mostly worked on a cad-viewer plugin to display and use construction drawings inside the Planon-application, and a bim-model viewer, to render 3D models in the browser.`
  }, {
    role: 'Game Design intern',
    skills: ['Javascript', 'C#'],
    date_start: '2016',
    date_end: '2017',
    clients: ['Games [4 Therapy] foundation'],
    description: `Created a playful application in Unity (C#) for children in therapy that will replace their paper-based assignments and help them become more motivated to participate in therapy. This was a graduation internship.`
  }, {
    role: 'Game Design intern',
    skills: ['Javascript', 'Google Glass'],
    date_start: '2013',
    date_end: '2014',
    clients: ['Monpellier Ventures', 'REshape Center, Radboud umc Nijmegen', 'GGZe Eindhoven'],
    description: `Designed a game concept for heart-disease patients at the Radboud umc hospital which kept track of nation-wide AED locations. Created a HTML prototype for this game concept as well. Secondary role as an intern was to handle incoming requests from the medical staff and design solutions for these problems.`
  }];
}
