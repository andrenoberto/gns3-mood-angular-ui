import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {ListProjectsModule} from '../list-projects/list-projects.module';
import {CreateProjectModule} from '../create-project/create-project.module';

@NgModule({
  imports: [
    CommonModule,
    ListProjectsModule,
    CreateProjectModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
