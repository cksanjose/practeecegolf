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

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    SkillLevelComponent,
    GolfHoleComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NoopAnimationsModule
  ],
  providers: [
    GolfHoleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
