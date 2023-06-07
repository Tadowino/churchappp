import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HelpComponent } from './pages/help/help.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'about-us'
},
  {
  path: 'about-us',
  component: AboutUsComponent
},
{
  path: 'programs',
  component: ProgramsComponent
},
{
  path: 'contact-us',
  component: ContactUsComponent
},
{
  path: 'help',
  component: HelpComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
