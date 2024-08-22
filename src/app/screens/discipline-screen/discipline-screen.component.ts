import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/types';

@Component({
  selector: 'app-discipline-screen',
  templateUrl: './discipline-screen.component.html',
  styleUrls: ['./discipline-screen.component.scss']
})
export class DisciplineScreenComponent implements OnInit {

  public title = 'Web development';

  public disciplineAsProject: Project = {
    id: '-1',
    title: 'Web development',
    image: '',
    languages: [],
    description: 'I have been working in web development for about 6 years now and it is one of my favorite fields to work in. It\'s very dynamic, ever evolving and there are always new things to learn. Opposed to software development, web development is more about making a splash and offering users a more consise experience.',
    duration: '',
    type: 'Web Application',
    teamSize: '',
    logo: '',
    slug: '',
    displayInHeader: false,
  };

  constructor (private readonly router: Router) {}

  public ngOnInit(): void {
    const id = this.router.url.split('/')[2];
    const ids = ['webdev', 'softwaredev', 'gamedev'];
    console.log(id);
    if (!ids.includes(id)) {
      this.router.navigate(['/error']);
    }

    // TODO fetch data from CF
  }
}
