import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

export type Recipe = {
  title: string;
  ingredients: {
    key: string;
    value: string;
  }[];
  directions: {
    key: string;
  }[];
  tags: string[];
};

@Component({
    selector: 'app-recipe-screen',
    templateUrl: './recipe-screen.component.html',
    styleUrls: ['./recipe-screen.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, NgFor]
})
export class RecipeScreenComponent {

  public recipe: Recipe | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly httpClient: HttpClient
  ) {
    this.route.params.subscribe((params: any) => {
      this.httpClient.get(`../../assets/json/${params.id}`).subscribe((json) => {
        this.recipe = json as Recipe;
      });
    })
  }
}
