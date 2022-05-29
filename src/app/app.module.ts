import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JobsModule } from './jobs/jobs.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JobsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
