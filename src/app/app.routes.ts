import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Exercises } from './pages/exercises/exercises';

export const routes: Routes = [
{path:"", component: Home},
{path:"exercicios", component: Exercises},
{path:"contato", component:Contact}
];
