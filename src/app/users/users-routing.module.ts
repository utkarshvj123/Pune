import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  HomeComponent } from './home/home.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';

import { UsersComponent } from './users.component';


const routes: Routes = [
  {path: '', component: UsersComponent,
  children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: 'home', component: HomeComponent},
          { path: 'about-us', component: AboutUsComponent},
          { path: 'help', component: HelpComponent },
     ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
