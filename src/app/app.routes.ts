import { Routes } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ResumePageComponent} from './components/resume-page/resume-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {PersonalPageComponent} from './components/personal-page/personal-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'personal', component: PersonalPageComponent },
  { path: '**', redirectTo: '/home' }
];
