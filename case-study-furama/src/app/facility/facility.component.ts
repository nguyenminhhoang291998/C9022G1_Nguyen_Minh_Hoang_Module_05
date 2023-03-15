import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  constructor(private facilityService: FacilityService) {
  }

  facilityList: Facility[] = [];
  newFacilityForm: FormGroup;
  facilityType = 1;
  editFacilityForm: FormGroup;
  editFacilityId: number;
  editFacility: Facility;
  deleteFacilityId: number;
  deleteFacility: Facility;

  ngOnInit(): void {
    this.getAll();
    this.newFacilityForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D+$')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      // facilityType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
      facilityFree: new FormControl('', [Validators.required])

    });
  }

  getAll() {
    return this.facilityService.getAll().subscribe(facilities => {
      this.facilityList = facilities;
    });
  }

  onSubmitAdd() {
    const facility = this.newFacilityForm.value;
    facility.facilityType = this.facilityType;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.newFacilityForm.reset();
      alert('Thêm thành công');
      this.getAll();
    });
  }

  edit(facilityId: number) {
    this.editFacilityId = facilityId;
    this.facilityService.findFacilityById(facilityId).subscribe(facility => {
      this.editFacility = facility;
      this.styleFrom(this.editFacility.facilityType);
      this.editFacilityForm = new FormGroup({
        id: new FormControl(this.editFacility.id),
        img: new FormControl(this.editFacility.img),
        facilityType: new FormControl(this.editFacility.facilityType),
        name: new FormControl(this.editFacility.name, [Validators.required, Validators.pattern('^\\D+$')]),
        area: new FormControl(this.editFacility.area, [Validators.required]),
        cost: new FormControl(this.editFacility.cost, [Validators.required]),
        maxPeople: new FormControl(this.editFacility.maxPeople, [Validators.required]),
        rentType: new FormControl(this.editFacility.rentType, [Validators.required]),
        standardRoom: new FormControl(this.editFacility.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(this.editFacility.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(this.editFacility.poolArea, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
        numberOfFloors: new FormControl(this.editFacility.numberOfFloors, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
        facilityFree: new FormControl(this.editFacility.facilityFree, [Validators.required])
      });
    });
  }


  onSubmitEdit() {
    this.facilityService.updateFacility(this.editFacilityId, this.editFacilityForm.value);
    this.getAll();
  }

  delete(id: number) {
    this.deleteFacilityId = id;
    this.facilityService.findFacilityById(id).subscribe(facility => {
      this.deleteFacility = facility;
    });
  }

  onDelete() {
    this.facilityService.deleteFacility(this.deleteFacilityId).subscribe(() => {
      alert('Xóa thành công');
      this.getAll();
    });
  }

  addVilla() {
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('poolArea').style.display = 'block';
    document.getElementById('numberOfFloor').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

  addHouse() {
    this.facilityType = 2;
    document.getElementById('standardRoom').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloor').style.display = 'block';
    document.getElementById('facilityFree').style.display = 'none';
  }

  addRoom() {
    this.facilityType = 3;
    document.getElementById('standardRoom').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('poolArea').style.display = 'none';
    document.getElementById('numberOfFloor').style.display = 'none';
    document.getElementById('facilityFree').style.display = 'block';
  }

  styleFrom(facilityTypeId: number) {
    if (facilityTypeId === 1) {
      document.getElementById('formStandardRoomEdit').style.display = 'block';
      document.getElementById('formDescriptionEdit').style.display = 'block';
      document.getElementById('formPoolAreaEdit').style.display = 'block';
      document.getElementById('formNumberOfFloorsEdit').style.display = 'block';
      document.getElementById('formFacilityFreeEdit').style.display = 'none';
    } else if (facilityTypeId === 2) {
      document.getElementById('formStandardRoomEdit').style.display = 'block';
      document.getElementById('formDescriptionEdit').style.display = 'block';
      document.getElementById('formPoolAreaEdit').style.display = 'none';
      document.getElementById('formNumberOfFloorsEdit').style.display = 'block';
      document.getElementById('formFacilityFreeEdit').style.display = 'none';
    } else if (facilityTypeId === 3) {
      document.getElementById('formStandardRoomEdit').style.display = 'none';
      document.getElementById('formDescriptionEdit').style.display = 'none';
      document.getElementById('formPoolAreaEdit').style.display = 'none';
      document.getElementById('formNumberOfFloorsEdit').style.display = 'none';
      document.getElementById('formFacilityFreeEdit').style.display = 'block';
    }
  }
}
