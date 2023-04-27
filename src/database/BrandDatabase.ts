import { BaseDatabase } from "./BaseDatabase";

export class BrandDatabase extends BaseDatabase{
    public static TABLE_BRANDS = "brands"

    public async getBrands() {
        const brandsDB = await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS)
        return brandsDB
    }

    public async getBrandById(id: string) {
        const [brandDB] = await BaseDatabase.connection(BrandDatabase.TABLE_BRANDS)
            .select()
            .where({id})
        
        return brandDB
    }

    

    // public async getBrandById(id: string) {
    //     const [brandDB] = await BaseDatabase.connection()
    //         .select(
    //             "brands.*",
    //             "products.id AS productId",
    //             "products.name",
    //             "products.price",
    //             "products.description"
    //         )
    //         .from(BrandDatabase.TABLE_BRANDS)
    //         .where("brands.id", "=", id)
    //         .innerJoin("products", "products.brand_id", "=", "brands.id")

    //     console.log(brandDB)
    //     return brandDB
    // }


}