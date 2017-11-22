import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { SkillLevelComponent } from './skill-level/skill-level.component';
import { GolfHoleComponent } from './golf-hole/golf-hole.component';
import { GolfHoleService } from "./golf-hole/golf-hole.service";
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    SkillLevelComponent,
    GolfHoleComponent,
    PathNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatCardModule,
    NoopAnimationsModule
  ],
  providers: [
    GolfHoleService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    MatCardModule
  ]
})
export class AppModule { }
