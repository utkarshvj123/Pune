import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import {UsersComponent } from './users.component';
import {HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';

import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    AboutUsComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
  ]
})
export class UsersModule { }
