import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EmailsComponent} from './emails/emails.component';
import {VideosComponent} from './videos/videos.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {CenterSpinnerComponent} from './center-spinner/center-spinner.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AuthGuard} from './guards/auth.guard';
import {ApiService} from './services/api.service';
import {EventBus} from './services/event.bus';
import {HeaderComponent} from './header/header.component';
import {FlexAlignmentHackDirective} from './directives/flex-alignment-hack';
import {TruncatePipe} from './pipes/truncate';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    VideosComponent,
    VideoCardComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    CenterSpinnerComponent,
    HeaderComponent,
    FlexAlignmentHackDirective,
    TruncatePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, ApiService, EventBus],
  bootstrap: [AppComponent]
})
export class AppModule {
}
