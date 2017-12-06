import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { SkillLevelComponent } from './skill-level/skill-level.component';
import { GolfHoleComponent } from './golf-hole/golf-hole.component';
import { GolfHoleService } from "./golf-hole/golf-hole.service";
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SkillLevelService } from "./skill-level/skilllevel.service";
import { HttpClientModule } from "@angular/common/http";
import { PracticeNavComponent } from './shared/practice-nav/practice-nav.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'practice', component: PracticeComponent, children: [
      { path: 'golfhole', component: GolfHoleComponent }
    ] },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    SkillLevelComponent,
    GolfHoleComponent,
    PathNotFoundComponent,
    HomeComponent,
    PracticeNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule
  ],
  providers: [
    GolfHoleService,
    SkillLevelService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
