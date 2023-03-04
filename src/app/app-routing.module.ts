import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "CR | Home" },
  { path: 'projects', component: ProjectsComponent, title: "CR | Projects" },
  { path: '', component: HomeComponent, title: "CR | Home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
