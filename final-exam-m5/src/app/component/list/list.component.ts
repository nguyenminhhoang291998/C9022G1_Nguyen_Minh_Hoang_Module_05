import {Component, OnInit} from '@angular/core';
import {CoachService} from "../../service/coach.service";
import {LocationService} from "../../service/location.service";
import {Coach} from "../../model/coach";
import {Location} from "../../model/location";
import Swaf from "sweetalert2";
import {CoachType} from "../../model/coach-type";
import {CoachTypeService} from "../../service/coach-type.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private coachService: CoachService,
              private locationService: LocationService,
              private coachTypeService: CoachTypeService) {
  }
  coaches: Coach[];
  locations: Location[];
  coachTypes: CoachType[];
  deleteCoachId: number;

  ngOnInit(): void {
   this.getAll();
  }

  getAll() {
    this.locationService.getAll().subscribe(item => {
      this.locations = item;
    })
    this.coachService.getAll().subscribe(item => {
      this.coaches = item.content;
    })
    this.coachTypeService.getAll().subscribe(item => {
      this.coachTypes = item;
    })
  }

  delete(id: number) {
    this.deleteCoachId = id;
  }

  onDelete() {
    this.coachService.delete(this.deleteCoachId).subscribe(() => {
      Swaf.fire({
        title: "Xóa thành công",
        icon: "success",
        confirmButtonText: "Ok"
      })
      this.getAll();
    })
  }
}
