import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  exports: [PhotoDetailsComponent],
  declarations: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
