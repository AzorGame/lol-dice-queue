import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Champion } from '../data/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private PATCH_VERSION = '10.20.1';
  private COMMUNITY_API_SERVER = 'https://cdn.communitydragon.org/latest';
  private DDRAGON_API_SERVER = 'http://ddragon.leagueoflegends.com/cdn/' + this.PATCH_VERSION;

  constructor(private http: HttpClient) { }

  /**
   * Get a random Champion.
   */
  public getRandomChampion(): Observable<any> { // TODO champion type
    return this.http.get(this.DDRAGON_API_SERVER + '/data/en_US/champion.json');
  }

  /**
   * Get all available Champions
   */
  private getChampions(): Observable<Champion[]> {
    return this.http
      .get<any>(this.DDRAGON_API_SERVER + '/data/en_US/champion.json')
      .pipe(
        map((res: any) => {
          return res.response;
        })
      );
  }
}
