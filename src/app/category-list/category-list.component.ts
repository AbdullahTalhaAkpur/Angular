import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category | null;
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
   }

  ngOnInit(): void {
  }

  selectCategory(category: Category) {
    if(this.selectedCategory) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
    }
  }

}
