import {Component, OnInit} from '@angular/core';
import {CoachService} from "../../service/coach.service";
import {CoachTypeService} from "../../service/coach-type.service";
import {LocationService} from "../../service/location.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "../../model/location";
import {CoachType} from "../../model/coach-type";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import Swaf from "sweetalert2";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private coachService: CoachService,
              private coachTypeService: CoachTypeService,
              private locationService: LocationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  locations: Location[];
  coachTypes: CoachType[];
  coachFormCreate: FormGroup;

  ngOnInit(): void {
    this.locationService.getAll().subscribe(item => {
      this.locations = item;
      this.coachTypeService.getAll().subscribe(item => {
        this.coachTypes = item;
        this.coachFormCreate = new FormGroup({
          id: new FormControl('', [Validators.required]),
          coachType: new FormControl('', [Validators.required]),
          companyName: new FormControl('', [Validators.required]),
          departure: new FormControl('', [Validators.required]),
          destination: new FormControl('', [Validators.required]),
          phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^09[037]\d{7}$/)]),
          email: new FormControl('', [Validators.required, Validators.email]),
          departureTime: new FormControl('', [Validators.required, this.checkDepartureTime]),
          destinationTime: new FormControl('', [Validators.required, this.checkDestinationTime]),
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

  onSubmit() {
    const coach = this.coachFormCreate.value
    this.coachService.save(coach).subscribe(() => {
        this.router.navigateByUrl('')
        Swaf.fire({
          title: "Thêm thành công",
          icon: "success",
          confirmButtonText: "Ok"
        })
      }
    )
  }

}
