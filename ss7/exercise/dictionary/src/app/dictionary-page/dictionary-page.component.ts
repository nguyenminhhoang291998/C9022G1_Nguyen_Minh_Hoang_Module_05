import {Component, OnInit} from '@angular/core';
import {IWord} from '../iword';
import {DictionaryServiceService} from '../service/dictionary-service.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[] = [];

  constructor(private dictionaryServiceService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.wordList = this.dictionaryServiceService.getAll();
  }
}
