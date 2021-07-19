import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import {app_routing} from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { GamePageComponent } from './components/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
