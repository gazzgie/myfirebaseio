import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/idealist/idealist.module#IdealistPageModule' },
  { path: 'idea', loadChildren: './pages/ideadetails/ideadetails.module#IdeadetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/ideadetails/ideadetails.module#IdeadetailsPageModule' },
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { };