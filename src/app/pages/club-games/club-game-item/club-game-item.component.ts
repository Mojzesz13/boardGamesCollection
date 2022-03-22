import { Component, OnInit, Input } from '@angular/core';
import {ClubGames} from "../club-game.model";

@Component({
  selector: 'club-games-item',
  templateUrl: './club-game-item.component.html',
  styleUrls: ['../club-games-list/club-games-list.component.scss']
})
export class ClubGameItemComponent implements OnInit {
  @Input() game: ClubGames;



  constructor() { }

  ngOnInit(): void {
  }

}
