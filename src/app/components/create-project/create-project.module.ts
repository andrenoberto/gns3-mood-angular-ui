import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProjectComponent} from './create-project.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CreateProjectComponent],
  exports: [CreateProjectComponent]
})
export class CreateProjectModule {
}
