import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/components/login/login.component';
import { EmployeesComponent } from '@app/components/employees/employees.component';
import { AuthGuardService } from '@app/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "employees", component: EmployeesComponent, pathMatch: "full", canActivate : [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
