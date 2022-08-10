import { ProductInputMockDTO, SearchProductMockDTO } from './../../../src/types/DTO/ProductInputDTO';
import { SearchProductMock } from './ProductMock';


export class ProductDatabaseMock {
    public async insertProduct(product: ProductInputMockDTO): Promise<void> {};

    public async  getProduct(search: string): Promise<SearchProductMockDTO | undefined>{
        switch(search){
            case "search":
                return SearchProductMock
            default: 
                return undefined
        }
    }
}  