import {NgModule} from '@angular/core';
import {MainPageComponent} from './components/main-page/main-page.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { SubscriptionService } from '../admin-panel/components/subscription/subscription.service';

@NgModule({
  declarations:
    [
      MainPageComponent
    ],

  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  providers: [SubscriptionService]
})
export class HomeModule {
}
