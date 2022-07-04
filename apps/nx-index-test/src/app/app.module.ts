import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilBuildableLabelModule, UtilBuildableTagModule } from '@nx-index/util-buildable';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, UtilBuildableTagModule, UtilBuildableLabelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
