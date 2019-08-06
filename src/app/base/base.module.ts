import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { TopheadComponent } from './tophead/tophead.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [TopheadComponent, FooterComponent],
  imports: [
    CommonModule,
    BaseRoutingModule
  ],exports:[
    TopheadComponent, FooterComponent
  ]
})
export class BaseModule { }
