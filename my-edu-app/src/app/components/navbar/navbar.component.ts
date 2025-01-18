import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  linkType: string = 'add-product';

  linkClick(linkType: string) {
    this.linkType = linkType;
  }

  getClassAddProduct() {
    return {
      'active-link': this.linkType === 'add-product'
    };
  }

  getClassDeleteProduct() {
    return {
      'active-link': this.linkType === 'delete-product'
    };
  }

  getClassUpdateProduct() {
    return {
      'active-link': this.linkType === 'update-product'
    };
  }

  getClassShowTable() {
    return {
      'active-link': this.linkType === 'show-table'
    };
  }

  getClassVisualizeTable() {
    return {
      'active-link': this.linkType === 'visualize-table'
    };
  }

}
