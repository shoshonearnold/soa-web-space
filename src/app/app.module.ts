import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headquartersComponent } from './headquarters/headquarters.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from 'src/app/material/material.module';
import { NavComponent } from './navigation/nav.component';

@NgModule({
  declarations: [AppComponent, headquartersComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [provideAnimationsAsync('noop')],
  bootstrap: [AppComponent],
})
export class AppModule {}
