import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { HomeComponent } from './components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCandidateComponent } from './components/update-candidate/update-candidate.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreateCandidateComponent,
    HomeComponent,
    UpdateCandidateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,   
  ]
})
export class AdminModule { }
