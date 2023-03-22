import { Product } from "./product";

export class ProductRepository {
    private products : Product[] = [

        { id: 1,  name: "Iphone 14", price: 20000, imageUrl: "1.jpeg",  description: "eşsiz telefon", isActive: true, categoryId: 1},
        { id: 2, name: "Iphone 15", price: 30000, imageUrl: "2.jpeg", description: "eşsiz telefon", isActive: true, categoryId: 1 },
        { id: 3, name: "Iphone 16", price: 40000, imageUrl: "3.jpeg", description: "eşsiz telefon", isActive: true, categoryId: 1 },
        { id: 4, name: "Iphone 17", price: 50000, imageUrl: "1.jpeg", description: "eşsiz telefon", isActive: true, categoryId: 2 },
        { id: 5, name: "Iphone 18", price: 60000, imageUrl: "2.jpeg", description: "eşsiz telefon", isActive: true, categoryId: 2 },
        { id: 6, name: "Iphone 19", price: 70000, imageUrl: "3.jpeg", description: "eşsiz telefon", isActive: true, categoryId: 3 }
        ];

        getProducts(): Product[]  {
            return this.products.filter(p=>p.isActive);
          }
        
        getProductById(id: number) {
            return this.products.find(p=>p.id == id);
          }

          getProductsByCategoryId(id: number): Product[]  {
            return this.products.filter(p=>p.categoryId == id);
          }
}