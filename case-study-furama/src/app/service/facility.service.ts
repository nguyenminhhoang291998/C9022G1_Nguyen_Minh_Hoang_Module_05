import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() { }

  facilityList: Facility[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      img: '/assets/img/faci3.jpg',
      name: 'Room twin 02',
      area: 125,
      cost: 900000,
      maxPeople: 2,
      rentType: 4,
      facilityType: 3,
      facilityFree: '1 xe máy'
    }];

  getAll() {
    return this.facilityList;
  }

  findFacilityById(id: number) {
    return this.facilityList.find(item => item.id === id);
  }

  saveFacility(facility: Facility) {
    this.facilityList.push({...facility, id: this.facilityList.length + 1 , img: '/assets/img/faci3.jpg'});
  }

  updateFacility(facility: Facility) {
    debugger
    const index = this.facilityList.findIndex(item => item.id === facility.id);
    if (index !== -1) {
      this.facilityList.splice(index, 1, facility);
    }
  }

  deleteFacility(id: number) {
    const index = this.facilityList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.facilityList.splice(index, 1);
    }
  }
}
