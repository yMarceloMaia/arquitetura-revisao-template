import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCT = "products"

    public async getProductByName(q: string) {

        const productsDB = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where("name", "LIKE", `%${q}%`)
        return productsDB
    }
}