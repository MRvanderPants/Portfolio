import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ContentfulService } from 'src/services/contentful.service';
import { DataService } from 'src/services/data.service';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, IntersectionObserverModule.forRoot()),
        DataService,
        ContentfulService,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch(err => console.error(err));
