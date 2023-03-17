import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrefixIconPipe } from './pipes/prefix-icon.pipe';
import { ContentBlockComponent } from './content-block/content-block.component';
import { LanguagesComponent } from './languages/languages.component';
import { ResumeComponent } from './resume/resume.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { DetailScreenComponent } from './screens/detail-screen/detail-screen.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { PictureCarouselComponent } from './picture-carousel/picture-carousel.component';
import { GridBackgroundComponent } from './grid-background/grid-background.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrefixIconPipe,
    ContentBlockComponent,
    LanguagesComponent,
    ResumeComponent,
    BackToTopComponent,
    FooterComponent,
    HomeScreenComponent,
    DetailScreenComponent,
    ProjectGridComponent,
    PictureCarouselComponent,
    GridBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
