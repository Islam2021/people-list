import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeletionLoaderComponent } from './seletion-loader-module.component';



@NgModule({
  declarations: [SeletionLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SeletionLoaderComponent]
})
export class SeletionLoaderModule { }
