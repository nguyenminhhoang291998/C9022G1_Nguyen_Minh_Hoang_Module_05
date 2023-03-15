import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] = [];
    // [
    //   {
    //     id: 1,
    //     customer: {
    //       name: 'Nguyễn Thị Hào '
    //     },
    //     facility: {
    //       name: 'Villa beach front'
    //     },
    //     startDate: '2023/09/08',
    //     endDate: '2023/09/12',
    //     deposit: 200000
    //   },
    //   {
    //     id: 1,
    //     customer: {
    //       name: 'Phạm Xuân Diệu'
    //     },
    //     facility: {
    //       name: 'House princess 02'
    //     },
    //     startDate: '2023/09/08',
    //     endDate: '2023/09/12',
    //     deposit: 300000
    //   },
    //   {
    //     id: 1,
    //     customer: {
    //       name: 'Trương Đình Nghệ'
    //     },
    //     facility: {
    //       name: 'Room twin 02'
    //     },
    //     startDate: '2023/09/08',
    //     endDate: '2023/09/12',
    //     deposit: 100000
    //   }
    // ];
  constructor() {
  }

  getAll() {
    return this.contractList;
  }

  saveContract(contract: Contract) {
    this.contractList.push({...contract, id: this.contractList.length + 1 });
  }
}
