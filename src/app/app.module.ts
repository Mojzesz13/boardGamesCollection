import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzGridModule} from "ng-zorro-antd/grid";


import {MyGamesListComponent} from "./my-games/my-games-list.component";
import {GameListComponent} from "./my-games/games-list/game-list.component";
import { EditGameListComponent } from './my-games/edit-game-list/edit-game-list.component';
import { GameDescriptionComponent } from './club-games/game-description/game-description.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import {GameItemComponent} from "./my-games/games-list/game-item/game-item.component";

import {GameDetailComponent} from "./my-games/game-detail/game-detail.component";

import {ClubGameItemComponent} from "./club-games/club-game-item/club-game-item.component";
import {ClubGamesListComponent} from "./club-games/club-games-list.component";


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
    FooterComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
