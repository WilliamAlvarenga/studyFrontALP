import { ImmediateClickDirective } from './immediate-click.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImmediateClickDirective
  ],
  declarations: [ImmediateClickDirective]
})
export class ImmediateClickModule { }
