import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoomsModule } from './pages/rooms/rooms.module';
import { RouterModule } from '@angular/router';

import { HomeModule } from './pages/home/home.module';
import { APP_ROUTES } from './app.routes';
import { AuthenticationModule } from './pages/authentication/authentication.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule,
    HomeModule,
    RoomsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { }
