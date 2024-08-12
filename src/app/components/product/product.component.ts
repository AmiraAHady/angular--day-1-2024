import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/IProduct';
import { I } from '@angular/cdk/keycodes';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product!: IProduct;
  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute
  ) {}
  id!: number;
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productServ.getProductById(this.id).subscribe((data)=>{
      console.log(data);
      
      this.product=data;
    })
  }
 
}
