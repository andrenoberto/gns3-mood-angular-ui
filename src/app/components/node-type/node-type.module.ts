import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeTypeComponent} from './node-type.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NodeTypeComponent],
  exports: [NodeTypeComponent]
})
export class NodeTypeModule {
}
