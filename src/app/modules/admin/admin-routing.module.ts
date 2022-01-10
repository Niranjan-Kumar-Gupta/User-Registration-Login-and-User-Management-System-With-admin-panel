import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateCandidateComponent } from './components/update-candidate/update-candidate.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'createCandidate',component:CreateCandidateComponent},
    {path:'updateCandidate/:_id',component:UpdateCandidateComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
