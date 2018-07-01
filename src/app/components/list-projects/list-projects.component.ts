import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  public opened: string;
  public selected: string;
  public event: string;
  public projects: Array<any>;

  @ViewChild('projectList') el: ElementRef;

  constructor(private gns3ServerService: Gns3ServerService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.gns3ServerService.getOpenedProjects().subscribe(data => {
      data.forEach(project => this.gns3ServerService.closeProject(project.project_id).subscribe());
    });
  }

  private getProjectList() {
    this.gns3ServerService.getProjectList().subscribe(data => {
      this.projects = data;
    }, error => {
      console.log(error);
    });
  }

  onOpen() {
    this.getProjectList();
    this.renderer.addClass(this.el.nativeElement, 'is-active');
  }

  onClose() {
    this.renderer.removeClass(this.el.nativeElement, 'is-active');
    if (this.selected !== this.opened) {
      this.gns3ServerService.openProject(this.selected).subscribe(() => {
        if (this.opened) {
          this.gns3ServerService.closeProject(this.opened).subscribe(() => this.updateOpened());
        } else {
          this.updateOpened();
        }
      }, error => {
        console.log(error);
      });
    }
  }

  private updateOpened() {
    this.opened = this.selected;
    this.gns3ServerService.changeProject(this.opened);
  }
}
