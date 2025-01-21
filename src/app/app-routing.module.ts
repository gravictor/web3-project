import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent} from "./components/home/home.component";
import {AppSonicCheckerComponent} from "./components/checkers/sonic/sonic-checker.component";
import {AppSonicResultsComponent} from "./components/checkers/sonic/sonic-results/sonic-results.component";
import {XaiCheckerComponent} from "./components/checkers/xai/xai-checker.component";
import {XaiResultsComponent} from "./components/checkers/xai/xai-results/xai-results.component";

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'sonic', component: AppSonicCheckerComponent },
  { path: 'xai', component: XaiCheckerComponent },
  { path: 'sonic/results', component: AppSonicResultsComponent },
  { path: 'xai/results', component: XaiResultsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
