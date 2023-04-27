import { ProductDatabase } from "../database/ProductDatabase";
import { getProductOutputDTO } from "../dtos/getProducts.dto";
import { Product } from "../models/Product";

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase
    ) { }

    public async getProducts(q: string | undefined): Promise<Product[]> {

        const {productsDB, brandsDB} = await this.productDatabase.getProductsAndBrands(q)

        const products = productsDB.map((productDB) => {
            const product = new Product(
                productDB.id,
                productDB.name,
                productDB.price,
                productDB.description,
                getBrand(productDB.brand_id)
            )

            return product
        })

        function getBrand (brandId: string) {
            const brand = brandsDB.find((brandDB) => brandDB.id === brandId)
            return brand
        }

        if(!productsDB.length) throw new Error("nenhum produto encontrado")

        return products
    }
}