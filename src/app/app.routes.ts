import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { GamePageComponent } from './components/game-page/game-page.component';

const app_routes: Routes = [
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'game-page', component: GamePageComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);