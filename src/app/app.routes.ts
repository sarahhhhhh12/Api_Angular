import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent , title:'Home'},
    {path:'products' , component:ProductsComponent , title:'Products'},
    {path:'contact' , component:ContactComponent , title:'Contact'},
    {path:'**' , component:NotFoundComponent , title:'NotFound'},

];
