import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent implements OnInit {
  public nodeName: string;
  public type: string;

  @ViewChild('newNode') el: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onOpen() {
    this.renderer.addClass(this.el.nativeElement, 'is-active');
  }

  onCloseCancel = () => this.onClose();

  private onClose() {
    this.renderer.removeClass(this.el.nativeElement, 'is-active');
    this.clearForm();
  }

  onSave() {
    this.onClose();
  }

  private clearForm() {
    this.nodeName = '';
    this.type = '';
  }
}
