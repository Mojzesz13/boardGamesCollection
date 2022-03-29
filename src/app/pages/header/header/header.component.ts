import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayTypeEnum} from "../../../Enums/display-type.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() rederCondition: [];
  @Input() test1: boolean;
  @Output() featureSelected = new EventEmitter <string>();

  isOpen = false

  displayComponentEnum = DisplayTypeEnum;

  openDropDown(): boolean {
    return !this.isOpen
  }

  onSelect(feature: DisplayTypeEnum) {
    this.featureSelected.emit(feature)
  }
}
