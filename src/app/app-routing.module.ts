import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailScreenComponent } from './screens/detail-screen/detail-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RecipesScreenComponent } from './screens/recipes-screen/recipes-screen.component';
import { RecipeScreenComponent } from './screens/recipe-screen/recipe-screen.component';
import { JobDetailScreenComponent } from './screens/job-detail-screen/job-detail-screen.component';
import { ErrorScreenComponent } from './screens/error-screen/error-screen.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailScreenComponent },
  { path: 'jobs/:id', component: JobDetailScreenComponent },
  { path: 'recipes', component: RecipesScreenComponent },
  { path: 'recipe/:id', component: RecipeScreenComponent },
  { path: '', component: HomeScreenComponent },
  { path: '**', component: ErrorScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
