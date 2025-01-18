import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { VisualizeTableComponent } from './components/visualize-table/visualize-table.component';
import { ShowTableComponent } from './components/show-table/show-table.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

export const routes: Routes = [
    { path: '', component:FormComponent }, // Default route
    { path: 'add-product', component: FormComponent },
    { path: 'delete-product', component: DeleteProductComponent },
    { path: 'update-product', component: UpdateProductComponent },
    { path: 'show-table', component: ShowTableComponent },
    { path: 'visualize-table', component: VisualizeTableComponent }
  ];
