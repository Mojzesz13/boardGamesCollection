import { Component } from '@angular/core';
import {DisplayTypeEnum} from "./Enums/display-type.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'board-game-app';

  renderCondition = [
    {
      condition: false,
      name: DisplayTypeEnum.None,
    },
    {
      condition: false,
      name: DisplayTypeEnum.MyGame,
    },
    {
      condition: false,
      name: DisplayTypeEnum.ClubGame,
    },
  ]

  setFeatureDisplayRenderCondition(feature: DisplayTypeEnum) {
      this.renderCondition.forEach(value => {
        value.condition = feature === value.name
      })
  }


}
