import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectName: string;

  @ViewChild('newProject') el: ElementRef;

  constructor(private renderer: Renderer2,
              private gns3ServerService: Gns3ServerService) {
  }

  ngOnInit() {
  }

  onOpen() {
    this.renderer.addClass(this.el.nativeElement, 'is-active');
  }

  onCloseCancel = () => this.onClose();

  onSave() {
    this.gns3ServerService.createProject(this.projectName).subscribe(data => {
      console.log(data);
    }, error => console.log('error:', error));
    this.onClose();
  }

  private onClose() {
    this.renderer.removeClass(this.el.nativeElement, 'is-active');
    this.clearProjectName();
  }

  private clearProjectName() {
    this.projectName = '';
  }
}
