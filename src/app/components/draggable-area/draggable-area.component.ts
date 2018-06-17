import {Component, OnInit} from '@angular/core';
import {Swappable, Plugins} from '@shopify/draggable';

@Component({
  selector: 'app-draggable-area',
  templateUrl: './draggable-area.component.html',
  styleUrls: ['./draggable-area.component.scss']
})
export class DraggableAreaComponent implements OnInit {
  private containerSelector = '.column';
  private containers: any;
  private swappable: Swappable;

  constructor() {
  }

  ngOnInit() {
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
