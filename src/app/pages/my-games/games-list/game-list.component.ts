import {Component, Input} from '@angular/core';
import {WishListModel} from "../../../shared/wish-list.model";

@Component({
  selector: 'games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['../my-games-list.component.scss']
})
export class GameListComponent {
 @Input() wishList: WishListModel[] = [];


}
