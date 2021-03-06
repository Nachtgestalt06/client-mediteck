import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../services/patient/patient.service';
import {Router} from '@angular/router';
import {DoctorService} from '../../../services/doctor/doctor.service';
import {UtilsService} from '../../../services/utils/utils.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  queryString = '';
  searchableList: any;

  patients = [];

  constructor( public _patientService: PatientService,
               public _utilsService: UtilsService,
               public router: Router) {
    this.searchableList = ['Nombre', 'Apellidos'];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._patientService.getPatients()
      .pipe(
        map((res: Array<any>) => {
          res.forEach((x: any) => {
            x.Edad = this._utilsService.getAgeOnlyYear(x.Fecha_nacimiento);
          });
          console.log(res);
          return res;
        })
      )
      .subscribe(
        (res: any) => {
          this.patients = res;
          console.log(res);
        }
      );
  }

  reload(cerrado) {
    if (cerrado) {
      this.loadData();
    }
  }
}
