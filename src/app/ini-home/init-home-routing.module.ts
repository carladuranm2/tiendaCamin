import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitHomeRoutingModule { }
