import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/data/champion';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.sass']
})
export class ChampionComponent implements OnInit {

  champion: Champion = {
    id: 'Azir',
    key: '268',
    name: 'Azir',
    avatar: 'https://cdn.communitydragon.org/latest/champion/azir/square',
    title: 'the Emperor of the Sands',
    blurb: 'Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
