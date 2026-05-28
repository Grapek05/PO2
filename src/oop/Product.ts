export class Product {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _price: number;
    private readonly _size: number;

    constructor(id: string, name: string, price: number, size: number) {
        if (!id) throw new Error("Product id cannot be empty");
        if (!name) throw new Error("Product name cannot be empty");
        if (price < 0) throw new Error("Price cannot be negative");
        if (size <= 0) throw new Error("Size must be positive");

        this._id = id;
        this._name = name;
        this._price = price;
        this._size = size;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get size(): number {
        return this._size;
    }
}