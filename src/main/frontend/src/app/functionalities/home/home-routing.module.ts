import {NgModule} from '@angular/core';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth-guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
