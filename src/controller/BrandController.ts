import { Request, Response } from "express";
import { BrandDatabase } from "../database/BrandDatabase";
import { BrandBusiness } from "../business/BrandBusiness";

export class BrandController {
    constructor(
        private brandBusiness: BrandBusiness
    ) {}

    public getBrands = async (req: Request, res: Response) => {
        try {
            const output = await this.brandBusiness.getBrands()

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if(error instanceof Error){
                res.status(500).send(error.message)
            }else{
                res.status(500).send("erro inesperado")
            }
        }
    }   

    public getBrandById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const output = await this.brandBusiness.getBrandById(id)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if(error instanceof Error){
                res.status(500).send(error.message)
            }else{
                res.status(500).send("erro inesperado")
            }
        }
    }   
}