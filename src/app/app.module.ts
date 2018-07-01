import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DraggableAreaComponent} from './components/draggable-area/draggable-area.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Gns3ServerService} from './shared/services/gns3-server.service';
import {NavbarModule} from './components/navbar/navbar.module';
import {ShContextMenuModule} from 'ng2-right-click-menu';


@NgModule({
  declarations: [
    AppComponent,
    DraggableAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NavbarModule,
    ShContextMenuModule
  ],
  providers: [
    Gns3ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
