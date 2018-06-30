import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {ListProjectsModule} from '../list-projects/list-projects.module';
import {CreateProjectModule} from '../create-project/create-project.module';
import {NodeTypeModule} from '../node-type/node-type.module';
import {CreateNodeComponent} from '../create-node/create-node.component';
import {CreateNodeModule} from '../create-node/create-node.module';

@NgModule({
  imports: [
    CommonModule,
    ListProjectsModule,
    CreateProjectModule,
    CreateNodeModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
