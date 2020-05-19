import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComoponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [PhotoDetailsComoponent],
  exports: [PhotoDetailsComoponent],
  imports: [
    CommonModule,
    PhotoModule
  ],

})
export class PhotoDetailsModule {}