import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { PubComponent } from './pub/pub.component';
import { EvtComponent } from './evt/evt.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'create',
    //condition yekbel ken create haka la zeyda la neksa
    pathMatch: 'full',
    component: LoginComponent // made the default path on the Login !
  },

  {
    path: ':id/edit',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tool',
    pathMatch: 'full',
    component: ToolComponent
  },
  {
    path: 'pub',
    pathMatch: 'full',
    component: PubComponent
  },
  {
    path: 'event',
    pathMatch: 'full',
    component: EvtComponent
  },
  {
    path: '',
    component: MemberComponent
  },
  {
    path: '**',
    component: MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
