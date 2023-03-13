import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [
    {
      img: '/assets/img/faci1.jpg',
      name: 'Villa beach front',
      area: 250,
      cost: 1000000,
      maxPeople: 6,
      rentType: 3,
      facilityType: 1,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 100,
      numberOfFloors: 4
    },
    {
      img: '/assets/img/faci2.jpg',
      name: 'House princess 02',
      area: 150,
      cost: 4000000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 2,
      standardRoom: 'Normal',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloors: 2
    },
    {
      img: '/assets/img/faci3.jpg',
      name: 'Room twin 02',
      area: 125,
      cost: 900000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 3,
      facilityFree: '1 xe máy'
    }];

  constructor() {
  }

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
