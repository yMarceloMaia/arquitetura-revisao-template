import express from "express"
import { BrandController } from "../controller/BrandController"
import { BrandBusiness } from "../business/BrandBusiness"
import { BrandDatabase } from "../database/BrandDatabase"
import { ProductDatabase } from "../database/ProductDatabase"

export const brandRouter = express.Router()

const brandController = new BrandController(
    new BrandBusiness(
        new BrandDatabase(),
        new ProductDatabase()
    )
)

brandRouter.get("/", brandController.getBrands)
brandRouter.get("/:id", brandController.getBrandById)