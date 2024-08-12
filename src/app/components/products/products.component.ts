import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
    NgStyle,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  currentPage!: BehaviorSubject<number>;
  page: number = 1;
  totalPgaes!: number;
  constructor(private ProductServ: ProductService) {
    this.currentPage = new BehaviorSubject<number>(this.page);
  }

  ngOnInit() {
    this.currentPage.subscribe((newPage) => {
      this.ProductServ.getAllProducts(newPage).subscribe((data) => {
        // console.log(data);
        this.productList = data.productsData;
        this.totalPgaes = data.totalCount / 5;
      });
    });
  }
  nextPage() {
    if (this.page < this.totalPgaes) {
      this.currentPage.next(++this.page);
    }
  }
  prevPage() {
    if (this.page >= 1) {
      this.currentPage.next(--this.page);
    }
  }
}
