import { Cart } from "../oop/Cart.js";
import { Money } from "./Money.js";
import { Shipping } from "./Shipping.js";

export class ExpressShipping implements Shipping {
    private readonly maxSize = 1000;
    private readonly freeShippingThreshold = 20000; // 200 zł in grosze
    private readonly baseCost = 2000; // 20 zł

    estimatedDeliveryDays(): number {
        return 2;
    }

    calculateCost(cart: Cart): Money {
        const totalPrice = cart.getTotalPrice() * 100; // convert to grosze
        if (totalPrice >= this.freeShippingThreshold) {
            return new Money(0, "PLN");
        }
        return new Money(this.baseCost, "PLN");
    }

    validate(cart: Cart): void {
        const totalSize = cart.items.reduce((sum, item) => sum + (item.product.size * item.quantity), 0);
        if (totalSize > this.maxSize) {
            throw new Error(`Total size ${totalSize} exceeds maximum ${this.maxSize} for ExpressShipping`);
        }
    }
}