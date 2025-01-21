import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppHomeComponent } from "./components/home/home.component";
import { AppSonicCheckerComponent } from "./components/checkers/sonic/sonic-checker.component";
import {SonicService} from "./services/sonic.service";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AppAddressesFormInputComponent} from "./components/shared/addresses-form-input/addresses-form-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppSonicResultsComponent} from "./components/checkers/sonic/sonic-results/sonic-results.component";
import {MatTableModule} from "@angular/material/table";
import {XaiCheckerComponent} from "./components/checkers/xai/xai-checker.component";
import {XaiResultsComponent} from "./components/checkers/xai/xai-results/xai-results.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppHomeComponent,
    AppSonicCheckerComponent,
    AppAddressesFormInputComponent,
    AppSonicResultsComponent,
    XaiCheckerComponent,
    XaiResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  providers: [SonicService],
  bootstrap: [AppComponent],
})
export class AppModule { }
