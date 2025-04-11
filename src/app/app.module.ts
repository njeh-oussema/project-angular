import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { EvtComponent } from './evt/evt.component';
import { ToolComponent } from './tool/tool.component';
import { PubComponent } from './pub/pub.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalEvtComponent } from './modal-evt/modal-evt.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { firebaseConfig } from './environnement';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmComponent,
    TemplateComponent,
    EvtComponent,
    ToolComponent,
    PubComponent,
    DashboardComponent,
    ModalEvtComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    MatNativeDateModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
