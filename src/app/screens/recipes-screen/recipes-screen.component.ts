import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export type RecipeRoute = {key: string, value: string};

@Component({
  selector: 'app-recipes-screen',
  templateUrl: './recipes-screen.component.html',
  styleUrls: ['./recipes-screen.component.scss']
})
export class RecipesScreenComponent {

  public routes: RecipeRoute[] = [];

  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get('../../assets/json/routes.json').subscribe((json) => {
      const routes = json as RecipeRoute[];
      routes.sort((a, b) => a.key.localeCompare(b.key));
      this.routes = routes;
    });
  }

  public getFilename(route: RecipeRoute) {
    return route.value.split('assets/json/')[1];
  }
}
