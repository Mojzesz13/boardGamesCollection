import { Component } from '@angular/core';
import {ClubGames} from "./club-game.model";

@Component({
  selector: 'club-games',
  templateUrl: './club-games.component.html',
  styleUrls: ['./club-games.component.scss']
})
export class ClubGamesComponent  {
  games: ClubGames[] = [
    new ClubGames('Chaos in the old world', 'Strategy/Area Control', '/assets/images/chaos.jpg', 'Pawel'),
    new ClubGames('Etherfield', 'Dream', '/assets/images/etherfields.jpg', 'Pawel')
  ];

  gameToDisplay: ClubGames[]=[];

  setThis(value) {
    this.gameToDisplay = [];
    this.gameToDisplay.push(value);
  }
}
