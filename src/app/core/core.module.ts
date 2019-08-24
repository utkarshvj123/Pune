import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilerPipe } from './pipes/filer.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FilerPipe,
    FooterComponent

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbModule,
    MultiSelectModule,
    NgbModule,
    FormsModule,
    FilerPipe,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class CoreModule { }
