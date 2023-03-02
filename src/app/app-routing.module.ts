import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailScreenComponent } from './screens/detail-screen/detail-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  { path: 'details', component: DetailScreenComponent },
  { path: '', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
