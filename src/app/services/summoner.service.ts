import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Region } from '../data/region';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  private regionSource = new Subject<Region>();

  region$ = this.regionSource.asObservable();
  constructor() { }

  changeRegion(region: Region): void {
    this.regionSource.next(region);
  }
}
