import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent implements OnInit {
  public projectId: string;
  public nodeName: string;
  public type: string;

  @ViewChild('newNode') el: ElementRef;

  constructor(private renderer: Renderer2,
              private gns3ServerService: Gns3ServerService) { }

  ngOnInit() {
  }

  onOpen(projectId) {
    this.projectId = projectId;
    this.renderer.addClass(this.el.nativeElement, 'is-active');
  }

  onCloseCancel = () => this.onClose();

  private onClose() {
    this.renderer.removeClass(this.el.nativeElement, 'is-active');
    this.clearForm();
  }

  onSave() {
    this.gns3ServerService.createNode(this.projectId, this.nodeName, this.type).subscribe();
    this.onClose();
  }

  private clearForm() {
    this.nodeName = '';
    this.type = '';
  }
}
