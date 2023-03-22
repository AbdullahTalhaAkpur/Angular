import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[] = [
        { id: 0, name: "Tüm Kategoriler" },
        { id: 1, name: "Telefon" }, 
        { id: 2, name: "Bilgisayar" }, 
        { id: 3, name: "Televizyon" }
    ];

    getCategories(): Category[] {
       return this.categories;
    }

    getCategoryById(id: number) {
        return this.categories.find(c => c.id == id); 
    }
}