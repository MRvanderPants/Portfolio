import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrefixIconPipe } from './pipes/prefix-icon.pipe';
import { ContentBlockComponent } from './content-block/content-block.component';
import { LanguagesComponent } from './languages/languages.component';
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
import { TimelineResumeItemComponent } from './timeline-resume-item/timeline-resume-item.component';
import { TimelineProjectsItemComponent } from './timeline-projects-item/timeline-projects-item.component';
import { RecipesScreenComponent } from './screens/recipes-screen/recipes-screen.component';
import { RecipeScreenComponent } from './screens/recipe-screen/recipe-screen.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailScreenComponent } from './screens/job-detail-screen/job-detail-screen.component';
import { JumpInBoxComponent } from './jump-in-box/jump-in-box.component';
import { BackgroundFillBoxComponent } from './background-fill-box/background-fill-box.component';
import { TechListComponent } from './tech-list/tech-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrefixIconPipe,
    ContentBlockComponent,
    LanguagesComponent,
    BackToTopComponent,
    FooterComponent,
    HomeScreenComponent,
    DetailScreenComponent,
    JobDetailScreenComponent,
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
    TimelineResumeItemComponent,
    TimelineProjectsItemComponent,
    RecipesScreenComponent,
    RecipeScreenComponent,
    JobDetailsComponent,
    JumpInBoxComponent,
    BackgroundFillBoxComponent,
    TechListComponent,
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
