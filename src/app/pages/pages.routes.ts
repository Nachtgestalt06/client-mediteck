import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {DoctoresComponent} from './doctores/doctores.component';
import {AddDoctorComponent} from './doctores/add-doctor/add-doctor.component';
import {AddPatientsComponent} from './patients/add-patients/add-patients.component';
import {AddWarehouseComponent} from './warehouses/add-warehouse/add-warehouse.component';
import {WarehousesComponent} from './warehouses/warehouses.component';

import {AddNursesComponent} from './nurses/add-nurses/add-nurses.component';
import {NursesComponent} from './nurses/nurses.component';

import {AllPatientsComponent} from './nurses/all-patients/all-patients.component';

import {MedicalHistoryComponent} from './medical-consultations/medical-history/medical-history.component';
import {NewMedicalConsultationComponent} from './medical-consultations/new-medical-consultation/new-medical-consultation.component';
import {AddSectionComponent} from './infrastructure/add-section/add-section.component'
import {NotesComponent} from './medical-consultations/notes/notes.component'
import {BedsXroomComponent} from './infrastructure/beds-xroom/beds-xroom.component'
import {ListFloorsComponent} from './infrastructure/list-floors/list-floors.component'
import {ListPatientsComponent} from './patients/list-patients/list-patients.component'
import {LoginGuardGuard} from '../services/guards/login-guard.guard';
import {AddVaccineComponent} from './supplies/vaccine/add-vaccine/add-vaccine.component';
import {VaccineComponent} from './supplies/vaccine/vaccine.component';
import {AddProductsComponent} from './products/add-products/add-products.component';
import {ListProductsComponent} from './products/list-products/list-products.component'
import {PatientDetailComponent} from './patients/patient-detail/patient-detail.component';
import {PatientDetailsResolveService} from '../services/patient-detail-resolve/patient-details-resolve.service';
import {AutocompleteDataDetailService} from '../services/autocompleteData/autocomplete-data-detail.service';
import {DatesComponent} from './medical-consultations/dates/dates.component';
import {AdmissionsComponent} from './admissions/admissions.component';
import {AddUrgenciasComponent} from './admissions/add-urgencias/add-urgencias.component';
import {PatientsUrgenciasComponent} from './admissions/patients-urgencias/patients-urgencias.component';
import {ConsultationDetailResolveService} from '../services/consultation-detail-resolve/consultation-detail-resolve.service';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard', subtitle: 'Bienvenido'}},
      { path: 'medicos', component: DoctoresComponent, data: {titulo: 'Lista de Médicos', subtitle: 'Bienvenido'}},
      { path: 'agregar-medico', component: AddDoctorComponent, data: {titulo: 'Agregar Médico', subtitle: 'Bienvenido'}},
      { path: 'agregar-paciente', component: AddPatientsComponent, data: {titulo: 'Agregar Paciente', subtitle: 'Bienvenido'}},
      { path: 'agregar-almacen', component: AddWarehouseComponent, data: {titulo: 'Agregar Almacén', subtitle: 'Bienvenido'}},
      { path: 'almacenes', component: WarehousesComponent, data: {titulo: 'Lista de almacenes', subtitle: 'Bienvenido'}},
      { path: 'agregar-enfermera', component: AddNursesComponent, data: {titulo: 'Agregar Enfermera', subtitle: 'Bienvenido'}},
      { path: 'lista_enfermeras', component: NursesComponent, data: {titulo: 'Listar Enfermeras', subtitle: 'Bienvenido'}},
      { path: 'pacientes-place', component: AllPatientsComponent, data: {titulo: 'Pacientes del place', subtitle: 'Bienvenido'}},
      { path: 'cita', component: DatesComponent, data: {titulo: 'Citas', subtitle: 'Bienvenido'}},
      { path: 'historial_medico', component: MedicalHistoryComponent, data: {titulo: 'Historial Medico', subtitle: 'Bienvenido'}},
      { path: 'notas', component: NotesComponent, data: {titulo: 'Notas', subtitle: 'Bienvenido'}},
      { path: 'agregar_cama', component: BedsXroomComponent, data: {titulo: 'Agregar Camas', subtitle: 'Bienvenido'}},
      { path: 'consulta/:id', component: NewMedicalConsultationComponent,
        resolve: {
          patient: PatientDetailsResolveService,
          // diagnostics: AutocompleteDataDetailService
        },
        data: {titulo: 'Nueva Consulta', subtitle: 'Bienvenido'}},
      { path: 'agregar-seccion', component: AddSectionComponent, data: {titulo: 'Agregar Sección', subtitle: 'Bienvenido'}},
      { path: 'listar_pisos', component: ListFloorsComponent, data: {titulo: 'Listar Pisos', subtitle: 'Bienvenido'}},
      { path: 'listar_pacientes', component: ListPatientsComponent, data: {titulo: 'Listar Pacientes', subtitle: 'Bienvenido'}},
      { path: 'agregar-vacuna', component: AddVaccineComponent, data: {titulo: 'Agregar Vacuna', subtitle: 'Bienvenido'}},
      { path: 'vacunas', component: VaccineComponent, data: {titulo: 'Listar Vacunas', subtitle: 'Bienvenido'}},
      { path: 'add_product', component: AddProductsComponent, data: {titulo: 'Agregar productos', subtitle: 'Bienvenido'}},
      { path: 'list_product', component: ListProductsComponent, data: {titulo: 'Listar productos', subtitle: 'Bienvenido'}},
      { path: 'detalle-paciente/:id', component: PatientDetailComponent,
        resolve: {
          patient: PatientDetailsResolveService,
          consultations: ConsultationDetailResolveService
          // diagnostics: AutocompleteDataDetailService
        },
        data: {titulo: 'Detalle del paciente', subtitle: 'Bienvenido'}},
      { path: 'admissions', component: AdmissionsComponent, data: {titulo: 'Admisiones', subtitle: 'Bienvenido'}},
      { path: 'patients_urgencias', component: PatientsUrgenciasComponent, data: {titulo: 'Pacientes en urgencias', subtitle: 'Bienvenido'}},
      { path: 'add_urgencias', component: AddUrgenciasComponent, data: {titulo: 'Ingresar a urgencias', subtitle: 'Bienvenido'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
