import {Component, OnInit} from '@angular/core';
import {CoachService} from "../../service/coach.service";
import {LocationService} from "../../service/location.service";
import {Coach} from "../../model/coach";
import {Location} from "../../model/location";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import Swaf from "sweetalert2";
import {CoachType} from "../../model/coach-type";
import {CoachTypeService} from "../../service/coach-type.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private coachService: CoachService,
              private coachTypeService: CoachTypeService,
              private locationService: LocationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  // danhSachcoach: Coach[];
  id: number;
  locations: Location[];
  coachTypes: CoachType[];
  coachForm: FormGroup;

  ngOnInit(): void {
    this.locationService.getAll().subscribe(item => {
      this.locations = item;
      this.coachTypeService.getAll().subscribe(item => {
        this.coachTypes = item;
        this.activatedRoute.paramMap.subscribe(param => {
          this.id = +param.get('id');
          this.coachService.findById(this.id).subscribe(coach => {

            this.coachForm = new FormGroup({
              id: new FormControl(coach.id, [Validators.required]),
              coachType: new FormControl(this.coachTypes.find(item =>
              item.id == coach.coachType.id
              ), [Validators.required]),
              companyName: new FormControl(coach.companyName, [Validators.required]),
              departure: new FormControl(this.locations.find(item =>
                item.id == coach.departure.id
                )
                , [Validators.required]),
              destination: new FormControl(this.locations.find(item =>
                item.id == coach.destination.id
              ), [Validators.required]),
              phoneNumber: new FormControl(coach.phoneNumber, [Validators.required, Validators.pattern(/^09[037]\d{7}$/)]),
              email: new FormControl(coach.email, [Validators.required, Validators.email]),
              departureTime: new FormControl(coach.departureTime, [Validators.required, this.checkDepartureTime]),
              destinationTime: new FormControl(coach.destinationTime, [Validators.required, this.checkDestinationTime]),
            })
          })
        })
      })
    })
  }

  checkDepartureTime(control: AbstractControl) {
    const a = control.value.toString();
    const hours = parseInt(a.substring(0, 2))
    return hours >= 5 ? null : {departureTimeError: true};
  }

  checkDestinationTime(control: AbstractControl) {
    const a = control.value.toString();
    const hours = parseInt(a.substring(0, 2))
    return hours <= 22 ? null : {destinationTimeError: true};
  }

  onSubmit(id: number) {
    const coach = this.coachForm.value
    this.coachService.update(coach).subscribe(() => {
        this.router.navigateByUrl('')
        Swaf.fire({
          title: "Sửa thành công",
          icon: "success",
          confirmButtonText: "Ok"
        })
      }
    )
  }
}
