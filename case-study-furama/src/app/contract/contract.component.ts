import {Component, OnInit} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Facility} from '../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../service/contract.service';

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
    this.contractList = this.contractService.getAll();
    this.newContractForm = new FormGroup({
      customer: new FormControl(),
      facility: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      deposit: new FormControl('', [Validators.pattern(/^[1-9]\d*$/)])
    });
  }

  onSubmit() {
    this.contractService.saveContract(this.newContractForm.value);
    this.contractList = this.contractService.getAll();
  }
}
