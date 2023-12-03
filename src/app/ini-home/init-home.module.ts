import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitHomeRoutingModule } from './init-home-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselModule } from 'primeng/carousel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  declarations: [InventoryComponent,MenuComponent,OrderComponent,PaymentComponent,ProductComponent,DashboardComponent],
  imports: [
    CommonModule,
    InitHomeRoutingModule,
    CarouselModule,
    ScrollPanelModule,
    SpeedDialModule
  ],
})
export class InitHomeModule { }
