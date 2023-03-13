import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DictionaryServiceService} from '../service/dictionary-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  constructor(
    private dictionaryServiceService: DictionaryServiceService,
    private activatedRoute: ActivatedRoute
  ) { }
  word: IWord;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.word = this.dictionaryServiceService.findMeanByWord(word);
    });
  }

}
