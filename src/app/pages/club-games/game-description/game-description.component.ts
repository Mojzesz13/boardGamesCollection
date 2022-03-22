import {Component, Input} from '@angular/core';
import {ClubGames} from "../club-game.model";

@Component({
  selector: 'game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent{
  @Input() gameToDisplay: ClubGames[] =  []

}
