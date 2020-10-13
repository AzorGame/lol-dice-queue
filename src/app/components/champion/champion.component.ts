import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/data/champion';
import { ChampionService } from 'src/app/services/champion.service';

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
    avatar: 'assets/ddragon/img/champion/tiles/Azir_0.jpg',
    splash: 'assets/ddragon/img/champion/splash/Azir_0.jpg',
    tags: ['Marksman', 'Mage'],
    title: 'the Emperor of the Sands',
    blurb: 'Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...',
  }; 

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
  }

  /**
   * Get a random Champion from the service and store the value in the variable.
   */
  public generateNewRandomChampion(): void {
    this.championService.getRandomChampion().subscribe((champ) => {
      this.champion = champ;
    });
  }

}
