import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];

  newContractForm: FormGroup;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.newContractForm = new FormGroup({
      customer: new FormControl(),
      facility: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      deposit: new FormControl('', [Validators.pattern(/^[1-9]\d*$/)])
    });
  }

  getAll() {
    this.contractService.getAll().subscribe(contracts => {
      this.contractList = contracts;
    });
  }

  onSubmit() {
    this.contractService.saveContract(this.newContractForm.value).subscribe(() => {
      alert('Thêm thành công');
      this.getAll();
    });
  }
}
