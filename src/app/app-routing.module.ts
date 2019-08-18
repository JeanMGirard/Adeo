import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { PmeComponent } from './pages/pme/pme.component';
import { ParticuliersComponent } from './pages/particuliers/particuliers.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pme', component: ParticuliersComponent },
  { path: 'particuliers', component: PmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
