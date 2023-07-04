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
import { ResumeItemComponent } from './resume-item/resume-item.component';
import { WorkPanelComponent } from './work-panel/work-panel.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { SideProjectListComponent } from './side-project-list/side-project-list.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DataService } from 'src/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FadeInPipe } from './pipes/fade-in.pipe';
import { TimelineComponent } from './timeline/timeline.component';
import { IntersectionObserverModule } from 'ngx-intersection-observer';

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
    ResumeItemComponent,
    WorkPanelComponent,
    ParagraphComponent,
    TagListComponent,
    SideProjectListComponent,
    MobileNavComponent,
    ContactFormComponent,
    FadeInPipe,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IntersectionObserverModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
