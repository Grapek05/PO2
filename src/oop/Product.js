export class Product {
    _id;
    _name;
    _price;
    _size;
    constructor(id, name, price, size) {
        if (!id)
            throw new Error("Product id cannot be empty");
        if (!name)
            throw new Error("Product name cannot be empty");
        if (price < 0)
            throw new Error("Price cannot be negative");
        if (size <= 0)
            throw new Error("Size must be positive");
        this._id = id;
        this._name = name;
        this._price = price;
        this._size = size;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get size() {
        return this._size;
    }
}
//# sourceMappingURL=Product.js.map