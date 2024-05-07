import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsLoaderComponent } from './icons-loader/icons-loader.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IconsLoaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
