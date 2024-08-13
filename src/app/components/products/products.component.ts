import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/iproducts';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


constructor(private _productsservice:ProductsService){

}

products : IProducts[] = []


  ngOnInit(): void {

    this._productsservice.getproducts().subscribe({
      next:(res)=>{

        this.products = res.data;

      },

      error:(err)=>{
        this.products = err.results;


      }

    })
  }

  

}
