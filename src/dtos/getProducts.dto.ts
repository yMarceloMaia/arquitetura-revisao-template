export interface getProductOutputDTO {
    id: string,
    name: string,
    price: number,
    description: string,
    brand: {
        id: string,
        name: string
    }
}