import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   addVilla() {
    // document.getElementById('facilityTypeId').value = 1;
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('poolArea').style.display = 'block';
    document.getElementById('numberOfFloor').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

   addHouse() {
    // document.getElementById('facilityTypeId').value = 2;
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloor').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

   addRoom() {
    // document.getElementById('facilityTypeId').value = 3;
    document.getElementById('standardRoom').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloor').style.display = 'none';
    document.getElementById('facilityFree').style.display = 'block';
  }
}
