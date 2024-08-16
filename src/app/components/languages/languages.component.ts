import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  public languages = [
    {name: 'Javascript', icon: 'javascript'},
    {name: 'Typescript', icon: 'typescript'},
    {name: 'NodeJS', icon: 'nodejs'},
    {name: 'Angular', icon: 'angularjs'},
    {name: 'Vue', icon: 'vuejs'},
    {name: 'React (-native)', icon: 'react'},
  ];
}
