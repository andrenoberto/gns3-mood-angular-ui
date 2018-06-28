import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNodeComponent } from './create-node.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateNodeComponent],
  exports: [CreateNodeComponent]
})
export class CreateNodeModule { }
