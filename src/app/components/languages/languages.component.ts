import { Component } from '@angular/core';
import { PrefixIconPipe } from '../pipes/prefix-icon.pipe';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'],
    standalone: true,
    imports: [NgFor, PrefixIconPipe]
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
