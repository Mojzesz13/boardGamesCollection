import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";

import {MyGamesListComponent} from "./my-games/my-games-list.component";
import {GameListComponent} from "./my-games/games-list/game-list.component";
import { EditGameListComponent } from './my-games/edit-game-list/edit-game-list.component';
import { ClubGamesListComponent } from './club-games/club-games-list/club-games-list.component';
import { GameDescriptionComponent } from './club-games/game-description/game-description/game-description.component';
import { HeaderComponent } from './header/header/header.component';
import {GameItemComponent} from "./my-games/games-list/game-item/game-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyGamesListComponent,
    GameListComponent,
    EditGameListComponent,
    ClubGamesListComponent,
    GameDescriptionComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
