import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsModule } from './jobs/jobs.module';
import { ContentComponent } from './content/content.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, TopbarComponent],
  imports: [BrowserModule, AppRoutingModule, JobsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
