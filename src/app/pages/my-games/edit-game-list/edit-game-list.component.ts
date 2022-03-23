import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {WishListModel} from "../../../shared/wish-list.model";

@Component({
  selector: 'edit-games-list',
  templateUrl: './edit-game-list.component.html',
  styleUrls: ['./edit-game-list.component.scss']
})
export class EditGameListComponent implements OnInit {

  @ViewChild('titleInput') titleInputRef: ElementRef
  @ViewChild('typeInput') typeInputRef: ElementRef
  @ViewChild('yearInput') yearInputRef: ElementRef
  @Output() gameAdded = new EventEmitter <WishListModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const titleGame = this.titleInputRef.nativeElement.value;
    const typeGame = this.typeInputRef.nativeElement.value;
    const yearGame = this.yearInputRef.nativeElement.value;

    const newGame = new WishListModel(titleGame, yearGame, typeGame)
    this.gameAdded.emit(newGame)
  }
}
