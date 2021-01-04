import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import * as nav from "../../root-routing/app.routes"
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path:"",component:SideNavComponent,children:nav.getBusinessRoutes()}
]

@NgModule({
  declarations: [SideNavComponent,ContentComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class SideNavModule { }
