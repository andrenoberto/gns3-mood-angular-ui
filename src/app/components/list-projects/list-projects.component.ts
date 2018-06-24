import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {
  public selected: string;
  public event: string;
  public projects: Array<any>;
  public disableButton = true;

  @ViewChild('projectList') el: ElementRef;

  constructor(private gns3ServerService: Gns3ServerService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
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

  onClose = () => this.renderer.removeClass(this.el.nativeElement, 'is-active');
}
