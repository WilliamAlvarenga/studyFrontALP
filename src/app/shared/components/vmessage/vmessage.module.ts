import { VmessageComponent } from './vmessage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VmessageComponent],
  exports: [VmessageComponent]
})
export class VmessageModule { }
