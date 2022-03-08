import { Component } from '@angular/core'
import {ClubGames} from "./club-game.model";

@Component({
  selector: 'club-games-list',
  templateUrl: './club-games-list.component.html',
  styleUrls: ['./club-games-list.component.scss']
})

export class ClubGamesListComponent {

  games: ClubGames[] = [
    new ClubGames('Chaos in the old world', 'Strategy/Area Control', '/assets/images/chaos.jpg', 'Pawel')
  ];
}
