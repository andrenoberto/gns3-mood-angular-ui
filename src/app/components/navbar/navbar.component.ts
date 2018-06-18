import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import {faBook, faPause, faPlay, faPlus, faStop} from '@fortawesome/fontawesome-free-solid';
import {Gns3ServerService} from '../../shared/services/gns3-server.service';

fontawesome.library.add(faBook, faPlay, faPause, faPlus, faStop);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  projectName: string;

  @ViewChild('newProject') el: ElementRef;

  constructor(private renderer: Renderer2,
              private gns3ServerService: Gns3ServerService) {
  }

  ngOnInit() {
  }

  onOpen = () => this.renderer.addClass(this.el.nativeElement, 'is-active');

  onCloseCancel = () => this.onClose();

  onSave() {
    this.gns3ServerService.createProject(this.projectName).subscribe(data => {
      console.log(data);
    }, error => console.log('error:', error));
    this.onClose();
  }

  private onClose = () => this.renderer.removeClass(this.el.nativeElement, 'is-active');

  setPause = () => [];

  setPlay = () => [];

  setStop = () => [];
}
