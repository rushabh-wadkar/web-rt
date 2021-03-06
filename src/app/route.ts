import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JoinComponentClass } from './components/join/join.component';
import { IndexComponentClass} from './components/index/index.component';
import { CreateComponentClass } from './components/create/create.component';

export const appRoutes:Routes = [
  { path: '', component: IndexComponentClass },
  { path: 'join', component: JoinComponentClass },
  { path: 'create', component: CreateComponentClass },
  { path: '', redirectTo: '/', pathMatch: 'full' }
]