import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [],
  imports: [CommonModule, CvRoutingModule, QuillModule.forRoot()],
})
export class CvModule {}
