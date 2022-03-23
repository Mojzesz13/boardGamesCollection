import {Component} from "@angular/core";
import {WishListModel} from "../../shared/wish-list.model";

@Component({
  selector: 'my-games',
  templateUrl: './my-games-list.component.html',
  styleUrls: ['./my-games-list.component.scss']
})

export class MyGamesListComponent {

  wishList = [
    new WishListModel('Spiryt Island', 2017, 'Cooperative'),
    new WishListModel('Odmęty grozy', 2021, 'traitor')
  ];

  onGameAdded(game: WishListModel) {
    this.wishList.push(game);
  }
}
