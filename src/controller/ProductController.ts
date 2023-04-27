import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

// receber e enviar dados
// comunicação com a camada business 
// lida com o caminho bom e o caminho ruim

export class ProductController{
    constructor(
        private productBusiness: ProductBusiness
    ){}

    public getProducts = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            const output = await this.productBusiness.getProducts(q)

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