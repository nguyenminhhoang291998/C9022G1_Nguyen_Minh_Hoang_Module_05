import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  wordList: IWord[] = [
    {
      word: 'Apple',
      mean: 'Táo'
    },
    {
      word: 'Banana',
      mean: 'Chuối'
    },
    {
      word: 'Red',
      mean: 'Đỏ'
    },
    {
      word: 'Pink',
      mean: 'Hồng'
    },
  ];

  getAll() {
    return this.wordList;
  }

  findMeanByWord(word: string) {
    return this.wordList.find(item => item.word === word);
  }

  constructor() {
  }
}
