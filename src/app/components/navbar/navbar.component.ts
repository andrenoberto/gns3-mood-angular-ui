import {Component, OnInit, ViewChild} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import {faBook, faList, faPause, faPlay, faPlus, faStop} from '@fortawesome/fontawesome-free-solid';
import {ListProjectsComponent} from '../list-projects/list-projects.component';
import {CreateProjectComponent} from '../create-project/create-project.component';
import {CreateNodeComponent} from '../create-node/create-node.component';

fontawesome.library.add(faBook, faPlay, faPause, faPlus, faStop, faList);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(ListProjectsComponent) listProjectsComponent: ListProjectsComponent;
  @ViewChild(CreateProjectComponent) createProjectComponent: CreateProjectComponent;
  @ViewChild(CreateNodeComponent) createNodeComponent: CreateNodeComponent;

  constructor() {
  }

  ngOnInit() {
  }

  openProjectList = () => this.listProjectsComponent.onOpen();

  openCreateProject = () => this.createProjectComponent.onOpen();

  openCreateNode = () => this.createNodeComponent.onOpen();

  setPause = () => [];

  setPlay = () => [];

  setStop = () => [];
}
