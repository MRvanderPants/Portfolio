import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  styleUrls: ['./recipe-screen.component.scss']
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
