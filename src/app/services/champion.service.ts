import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Champion } from '../data/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  // TODO put these values in environment file
  private PATCH_VERSION = '10.20.1';
  private COMMUNITY_API_SERVER = 'https://cdn.communitydragon.org/latest';
  private DDRAGON_API_SERVER = 'http://ddragon.leagueoflegends.com/cdn/' + this.PATCH_VERSION;

  constructor(private http: HttpClient) { }

  /**
   * Get a random Champion.
   */
  public getRandomChampion(): Observable<any> { // TODO champion type
    return this.http
      .get<any>(this.DDRAGON_API_SERVER + '/data/en_US/champion.json')
      .pipe(
        map((res: any) => {
          const champs: Champion[] = [];
          for (const key in res.data) {
            if (res.data.hasOwnProperty(key)){
              const newChamp: Champion = {
                id: res.data[key].id,
                key: res.data[key].key,
                name: res.data[key].name,
                avatar: `http://ddragon.leagueoflegends.com/cdn/${this.PATCH_VERSION}/img/champion/${key}.png`,
                title: res.data[key].title,
                blurb: res.data[key].blurb,
              };
              champs.push(newChamp);
            }
          }
          const randomChampion: Champion = champs[Math.floor(Math.random() * champs.length)];
          return randomChampion;
        })
      );
  }
}
