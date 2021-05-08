
import {NgModule} from '@angular/core';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'map'
      },
      {
        path: 'map',
        component: MainPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
