import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {path: 'contato', component: ContatoComponent},
  {path: 'content', component: ContentComponent},
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
    declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
