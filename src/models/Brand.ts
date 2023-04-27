export class Brand {
    constructor(
        private id: string,
        private name: string
    ) { }

    public getId() {
        return this.id
    }

    public setId(value: string) {
        this.id = value
    }

    public getName() {
        return this.name
    }

    public setName(value: string) {
        this.name = value
    }
}