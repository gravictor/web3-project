import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent} from "./components/home/home.component";
import {AppSonicCheckerComponent} from "./components/checkers/sonic/sonic-checker.component";

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'sonic', component: AppSonicCheckerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
