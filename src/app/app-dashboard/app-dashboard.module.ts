import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@shared-material/shared-material.module';
import { MatListModule } from "@angular/material/list";
import { TextFieldModule } from "@angular/cdk/text-field";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MatListModule,
    TextFieldModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule { }
