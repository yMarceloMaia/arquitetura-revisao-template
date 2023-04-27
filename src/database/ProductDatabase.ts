import { BaseDatabase } from "./BaseDatabase";
import { BrandDatabase } from "./BrandDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCT = "products"

    public async getProductByName(q: string) {
        const productsDB = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where("name", "LIKE", `%${q}%`)

        return productsDB
    }

    public async getAllProducts() {
        const productsDB = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)

        return productsDB
    }

    public async getProductsAndBrands(q: string | undefined) {
        let productsDB
        if (q) {
            productsDB = await this.getProductByName(q)
        } else {
            productsDB = await this.getAllProducts()
        }
        const brandsDB = await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS)
            .select()

        return {
            productsDB,
            brandsDB
        }
    }
}