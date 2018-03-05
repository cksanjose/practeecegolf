import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { SkillLevelComponent } from './skill-level/skill-level.component';
import { GolfHoleComponent } from './golf-hole/golf-hole.component';
import { GolfHoleService } from './golf-hole/golf-hole.service';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillLevelService } from './skill-level/skilllevel.service';
import { HttpClientModule } from '@angular/common/http';
import { PracticeNavComponent } from './shared/practice-nav/practice-nav.component';
import { MaterialModule } from './shared/material.module';
import { PlayerProfileService } from './shared/player-profile.service';
import { ShotResultComponent } from './shot-result/shot-result.component';
import { ShotResultService } from "./shot-result/shot-result.service";
import { PracticeHeaderComponent } from './shared/practice-header/practice-header.component';
import { PracticeClubComponent } from './practice-club/practice-club.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'golfhole', component: GolfHoleComponent },
  { path: 'shotresult', component: ShotResultComponent },
  { path: 'practiceclub', component: PracticeClubComponent },
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
    PracticeNavComponent,
    ShotResultComponent,
    PracticeHeaderComponent,
    PracticeClubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ReactiveFormsModule
  ],
  providers: [
    GolfHoleService,
    SkillLevelService,
    PlayerProfileService,
    ShotResultService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
