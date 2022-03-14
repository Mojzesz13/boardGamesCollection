import { Component} from '@angular/core';
import {WishListModel} from "../../../shared/wish-list.model";

@Component({
  selector: 'games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['../my-games-list.component.scss']
})
export class GameListComponent {
 wishList: WishListModel[] = [
   new WishListModel('Spiryt Island', 2017, 'Cooperative'),
   new WishListModel('Odmęty grozy', 2021, 'traitor')

 ];


}
