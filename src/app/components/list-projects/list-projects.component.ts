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
  public disableButton: boolean;

  @ViewChild('projectList') el: ElementRef;
  @ViewChild('closeButton') elButton: ElementRef;

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
      this.renderer.removeClass(this.elButton.nativeElement, 'is-loading');
      this.disableButton = false;
    }, error => {
      console.log(error);
    });
  }

  onOpen() {
    this.disableButton = true;
    this.renderer.addClass(this.elButton.nativeElement, 'is-loading');
    this.renderer.addClass(this.el.nativeElement, 'is-active');
    this.getProjectList();
  }

  onClose() {
    this.renderer.addClass(this.elButton.nativeElement, 'is-loading');
    if (this.selected !== this.opened) {
      this.gns3ServerService.openProject(this.selected)
        .subscribe(() => {
          if (this.opened) {
            this.gns3ServerService.closeProject(this.opened).subscribe(() => this.updateOpened());
          } else {
            this.updateOpened();
          }
        }, error => {
          console.log(error);
        }, () => {
          this.renderer.removeClass(this.elButton.nativeElement, 'is-loading');
          this.renderer.removeClass(this.el.nativeElement, 'is-active');
        });
    } else {
      this.renderer.removeClass(this.elButton.nativeElement, 'is-loading');
      this.renderer.removeClass(this.el.nativeElement, 'is-active');
    }
  }

  private updateOpened() {
    this.opened = this.selected;
    this.gns3ServerService.changeProject(this.opened);
  }
}
