import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateNodeComponent} from './create-node.component';
import {NodeTypeModule} from '../node-type/node-type.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NodeTypeModule
  ],
  declarations: [CreateNodeComponent],
  exports: [CreateNodeComponent]
})
export class CreateNodeModule {
}
