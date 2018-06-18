import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {DraggableAreaComponent} from './components/draggable-area/draggable-area.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Gns3ServerService} from './shared/services/gns3-server.service';


@NgModule({
  declarations: [
    AppComponent,
    DraggableAreaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Gns3ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
