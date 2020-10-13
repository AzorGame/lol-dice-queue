import { Component, Input } from '@angular/core';
import { Champion } from 'src/app/data/champion';

@Component({
  selector: 'app-big-champion-card',
  templateUrl: './big-champion-card.component.html',
  styleUrls: ['./big-champion-card.component.sass']
})
export class BigChampionCardComponent {

  @Input() champ: Champion;

  constructor() { }
}
