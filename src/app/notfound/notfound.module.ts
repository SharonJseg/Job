import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NotfoundComponent,
  },
];

@NgModule({
  declarations: [NotfoundComponent],
  imports: [CommonModule, NotfoundRoutingModule],
})
export class NotfoundModule {}
