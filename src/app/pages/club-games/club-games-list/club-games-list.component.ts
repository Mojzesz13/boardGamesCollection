import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ClubGames} from "../club-game.model";

@Component({
  selector: 'club-games-list',
  templateUrl: './club-games-list.component.html',
  styleUrls: ['./club-games-list.component.scss']
})

export class ClubGamesListComponent {
@Input() games: ClubGames[];
@Output() gameToDisplay = new EventEmitter<ClubGames>()

  setGameToDisplay(value: ClubGames) {
    this.gameToDisplay.emit(value)
  }
}
