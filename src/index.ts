import express, { Request, Response } from "express"
import cors from "cors"
import { productRouter } from "./routers/productRouter"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor rodando na porta 3003"))

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
})

app.use("/products", productRouter)