import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrefixIconPipe } from './components/pipes/prefix-icon.pipe';
import { LanguagesComponent } from './components/languages/languages.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { DetailScreenComponent } from './screens/detail-screen/detail-screen.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { PictureCarouselComponent } from './components/picture-carousel/picture-carousel.component';
import { GridBackgroundComponent } from './components/grid-background/grid-background.component';
import { ResumeItemComponent } from './components/resume-item/resume-item.component';
import { WorkPanelComponent } from './components/work-panel/work-panel.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { SideProjectListComponent } from './components/side-project-list/side-project-list.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DataService } from 'src/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FadeInPipe } from './components/pipes/fade-in.pipe';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { TimelineResumeItemComponent } from './components/timeline-resume-item/timeline-resume-item.component';
import { TimelineProjectsItemComponent } from './components/timeline-projects-item/timeline-projects-item.component';
import { RecipesScreenComponent } from './screens/recipes-screen/recipes-screen.component';
import { RecipeScreenComponent } from './screens/recipe-screen/recipe-screen.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobDetailScreenComponent } from './screens/job-detail-screen/job-detail-screen.component';
import { JumpInBoxComponent } from './components/jump-in-box/jump-in-box.component';
import { BackgroundFillBoxComponent } from './components/background-fill-box/background-fill-box.component';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { ErrorScreenComponent } from './screens/error-screen/error-screen.component';
import { CfContentBlockComponent } from './components/cf-content-block/cf-content-block.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DisciplineScreenComponent } from './screens/discipline-screen/discipline-screen.component';
import { DetailHeaderComponent } from './components/detail-header/detail-header.component';
import { JobCarrouselComponent } from './components/job-carrousel/job-carrousel.component';
import { ContentfulService } from 'src/services/contentful.service';
import { WaveComponent } from './components/wave/wave.component';
import { KnowledgeMatrixComponent } from './components/knowledge-matrix/knowledge-matrix.component';
import { KnowledgeMatrixWrapperComponent } from './components/knowledge-matrix-wrapper/knowledge-matrix-wrapper.component';
import { BackgroundWrapperComponent } from './components/background-wrapper/background-wrapper.component';
import { JobHeaderComponent } from './components/job-header/job-header.component';
import { MoveDownComponent } from './components/move-down/move-down.component';
import { AnimatedLogoComponent } from './components/animated-logo/animated-logo.component';
import { FooterLintComponent } from './components/footer-lint/footer-lint.component';
import { FooterColofonComponent } from './components/footer-colofon/footer-colofon.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { GridBackgroundItemComponent } from './components/grid-background-item/grid-background-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrefixIconPipe,
    LanguagesComponent,
    BackToTopComponent,
    FooterComponent,
    HomeScreenComponent,
    DetailScreenComponent,
    ErrorScreenComponent,
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
    ContentBlockComponent,
    CfContentBlockComponent,
    BackButtonComponent,
    DisciplineScreenComponent,
    DetailHeaderComponent,
    JobCarrouselComponent,
    WaveComponent,
    KnowledgeMatrixComponent,
    KnowledgeMatrixWrapperComponent,
    BackgroundWrapperComponent,
    JobHeaderComponent,
    MoveDownComponent,
    AnimatedLogoComponent,
    FooterLintComponent,
    FooterColofonComponent,
    HeaderContentComponent,
    GridBackgroundItemComponent,
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
    DataService,
    ContentfulService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
