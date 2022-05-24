import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JobsModule } from './jobs/jobs.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JobsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
