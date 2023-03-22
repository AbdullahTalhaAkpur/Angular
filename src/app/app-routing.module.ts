import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'products', component: ProductListComponent },
 { path:'products/:productId', component: ProductComponent},
 { path: 'products/category/:categoryId', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}