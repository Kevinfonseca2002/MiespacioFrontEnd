import { Routes } from '@angular/router';
import { ArquitectProfile } from './pages/private/arquitect-profile/arquitect-profile';
import { Billing } from './pages/private/billing/billing';
import { Projects } from './pages/private/projects/projects';
import { Quotation } from './pages/private/quotation/quotation';

export const routes: Routes = [
  {path:"profile", component: ArquitectProfile},
  {path: "billing", component: Billing},
  {path:"project", component: Projects},
  {path: "requestedQuotes", component: Quotation},
  {path: "**", redirectTo: "profile"}
];
