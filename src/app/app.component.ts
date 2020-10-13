import { Component, OnInit } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'LoL - Dice Queue';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'League of Legends, dice queue, random champion, würfelqueue'},
      {name: 'description', content: 'Leage of Legends Dice Queue generates random champions for you.'},
      {name: 'og:title', content: this.title},
      {name: 'og:type', content: 'website'}, // TODO change
      {name: 'og:image', conent: ''}, // TODO add
      {name: 'og:site_name', conent: 'LoL Dice Queue - Azorimor'},
      // ...
    ]);
  }
}
