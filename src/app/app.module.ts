import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzGridModule} from "ng-zorro-antd/grid";


import {MyGamesListComponent} from "./pages/my-games/my-games-list.component";
import {GameListComponent} from "./pages/my-games/games-list/game-list.component";
import {EditGameListComponent} from './pages/my-games/edit-game-list/edit-game-list.component';
import {GameDescriptionComponent} from './pages/club-games/game-description/game-description.component';
import {HeaderComponent} from './header/header/header.component';
import {FooterComponent} from './footer/footer.component';
import {GameItemComponent} from "./pages/my-games/games-list/game-item/game-item.component";

import {GameDetailComponent} from "./pages/my-games/game-detail/game-detail.component";

import {ClubGameItemComponent} from "./pages/club-games/club-game-item/club-game-item.component";
import {ClubGamesListComponent} from "./pages/club-games/club-games-list/club-games-list.component";
import {NzListModule} from "ng-zorro-antd/list";
import {ClubGamesComponent} from './pages/club-games/club-games.component';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyGamesListComponent,
    GameListComponent,
    EditGameListComponent,
    ClubGameItemComponent,
    ClubGamesListComponent,
    GameDescriptionComponent,
    GameItemComponent,
    GameDetailComponent,
    FooterComponent,
    ClubGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzGridModule,
    NzListModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    NzFormModule,
    NzInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
