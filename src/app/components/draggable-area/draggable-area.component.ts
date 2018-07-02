import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {Plugins, Swappable} from '@shopify/draggable';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';
import fontawesome from '@fortawesome/fontawesome';
import {faLink, faPause, faPlay, faStop, faSync, faTimes, faTrash} from '@fortawesome/fontawesome-free-solid';
import 'rxjs/add/observable/interval';

fontawesome.library.add(faPlay, faPause, faStop, faTrash, faSync, faLink, faTimes);

@Component({
  selector: 'app-draggable-area',
  templateUrl: './draggable-area.component.html',
  styleUrls: ['./draggable-area.component.scss']
})
export class DraggableAreaComponent implements AfterViewInit {
  private containerSelector = '.column';
  private containers: any;
  private swappable: Swappable;
  private nodeToLink: any;
  private nodeLinked: any;
  public primaryNodeToLink = '';
  public secondaryNodeToLink = '';
  public nodes: Array<any>;
  public projectId: string;
  public linkWith = false;

  @ViewChild('nodeRefresh', {read: ElementRef}) private el: ElementRef;

  constructor(private gns3ServerService: Gns3ServerService,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.gns3ServerService.currentProject.subscribe(projectId => {
      this.projectId = projectId;
      this.getNodes();
    });
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

  public getNodes() {
    if (this.projectId) {
      this.renderer.addClass(this.el.nativeElement, 'is-loading');
      this.gns3ServerService.getNodes(this.projectId).subscribe(nodes => {
        this.nodes = nodes;
        this.renderer.removeClass(this.el.nativeElement, 'is-loading');
      });
    }
  }

  /*private getDraggable() {
    this.containers = document.querySelectorAll(this.containerSelector);
    this.swappable = new Swappable(this.containers, {
      draggable: '.column',
      mirror: {
        appendTo: this.containerSelector,
        constrainDimensions: true
      },
      plugins: [Plugins.ResizeMirror]
    });
  }*/

  setPrimaryNodeToLink($event) {
    this.linkWith = true;
    this.primaryNodeToLink = $event.data.node_id;
    this.nodeToLink = document.getElementById($event.data.node_id).lastElementChild;
    this.renderer.removeClass(this.nodeToLink, 'is-primary');
  }

  linkNode($event) {
    if ($event.data.node_id !== this.primaryNodeToLink) {
      this.nodeLinked = document.getElementById($event.data.node_id).lastElementChild;
      this.renderer.removeClass(this.nodeLinked, 'is-primary');
      this.secondaryNodeToLink = $event.data.node_id;
      this.linkWith = false;
      this.gns3ServerService.linkNode(this.primaryNodeToLink, this.secondaryNodeToLink, this.projectId).subscribe(
        () => {
        },
        () => this.releaseNodes(),
        () => this.releaseNodes()
      );
    } else {
      this.linkWith = false;
      this.primaryNodeToLink = '';
      this.renderer.addClass(this.nodeToLink, 'is-primary');
      this.nodeToLink = null;
    }
  }

  private releaseNodes() {
    this.primaryNodeToLink = '';
    this.secondaryNodeToLink = '';
    this.renderer.addClass(this.nodeToLink, 'is-primary');
    this.renderer.addClass(this.nodeLinked, 'is-primary');
    this.nodeToLink = null;
    this.nodeLinked = null;
  }

  startNode = $event => this.gns3ServerService.startNode($event.data.node_id, this.projectId).subscribe();

  stopNode = $event => this.gns3ServerService.stopNode($event.data.node_id, this.projectId).subscribe();

  suspendNode = $event => this.gns3ServerService.suspendNode($event.data.node_id, this.projectId).subscribe();

  reloadNode = $event => this.gns3ServerService.reloadNode($event.data.node_id, this.projectId).subscribe();

  deleteNode = $event => this.gns3ServerService.deleteNode($event.data.node_id, this.projectId).subscribe();
}
