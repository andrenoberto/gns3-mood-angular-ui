import {Component, OnInit} from '@angular/core';
import {Plugins, Swappable} from '@shopify/draggable';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

@Component({
  selector: 'app-draggable-area',
  templateUrl: './draggable-area.component.html',
  styleUrls: ['./draggable-area.component.scss']
})
export class DraggableAreaComponent implements OnInit {
  private containerSelector = '.column';
  private containers: any;
  private swappable: Swappable;
  public nodes: Array<any>;

  constructor(private gns3ServerService: Gns3ServerService) {
  }

  ngOnInit() {
    this.gns3ServerService.currentProject.subscribe(projectId => this.getNodes(projectId));
    this.containers = document.querySelectorAll(this.containerSelector);
    this.swappable = new Swappable(this.containers, {
      draggable: '.column',
      mirror: {
        appendTo: this.containerSelector,
        constrainDimensions: true
      },
      plugins: [Plugins.ResizeMirror]
    });
  }

  private getNodes(projectId) {
    if (projectId) {
      this.gns3ServerService.getNodes(projectId).subscribe(data => {
        this.nodes = data;
      }, error => console.log(error));
    }
  }

  private getDraggable() {
    this.containers = document.querySelectorAll(this.containerSelector);
    this.swappable = new Swappable(this.containers, {
      draggable: '.column',
      mirror: {
        appendTo: this.containerSelector,
        constrainDimensions: true
      },
      plugins: [Plugins.ResizeMirror]
    });
  }
}
