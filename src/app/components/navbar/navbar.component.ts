import {Component, OnInit, ViewChild} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import {faBook, faPause, faPlay, faPlus, faStop, faList} from '@fortawesome/fontawesome-free-solid';
import {ListProjectsComponent} from '../list-projects/list-projects.component';
import {CreateProjectComponent} from '../create-project/create-project.component';

fontawesome.library.add(faBook, faPlay, faPause, faPlus, faStop, faList);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(ListProjectsComponent) listProjectsComponent: ListProjectsComponent;
  @ViewChild(CreateProjectComponent) createProjectComponent: CreateProjectComponent;

  constructor() {
  }

  ngOnInit() {
  }

  openProjectList = () => this.listProjectsComponent.onOpen();

  openCreateProject = () => this.createProjectComponent.onOpen();

  setPause = () => [];

  setPlay = () => [];

  setStop = () => [];
}
