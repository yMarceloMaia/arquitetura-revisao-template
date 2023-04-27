export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private description: string,
        private brand: {
            id: string
            name: string
        }
    ) { }

    public getBrand() {
        return this.brand
    }

    public setBrand(value: { id: string, name: string }) {
        this.brand = value
    }

    public getDescription(): string {
        return this.description
    }

    public setDescription(value: string) {
        this.description = value
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(value: number) {
        this.price = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string) {
        this.name = value
    }

    public getId() {
        return this.id
    }

    public setId(value: string) {
        this.id = value
    }

}