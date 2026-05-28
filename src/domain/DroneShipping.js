import { Money } from "./Money.js";
export class DroneShipping {
    maxSize = 500;
    freeShippingThreshold = 20000; // 200 zł
    baseCost = 5000; // 50 zł
    estimatedDeliveryDays() {
        return 1;
    }
    calculateCost(cart) {
        const totalPrice = cart.getTotalPrice() * 100; // convert to grosze
        if (totalPrice >= this.freeShippingThreshold) {
            return new Money(0, "PLN");
        }
        return new Money(this.baseCost, "PLN");
    }
    validate(cart) {
        const totalSize = cart.items.reduce((sum, item) => sum + (item.product.size * item.quantity), 0);
        if (totalSize > this.maxSize) {
            throw new Error(`Total size ${totalSize} exceeds maximum ${this.maxSize} for DroneShipping`);
        }
    }
}
//# sourceMappingURL=DroneShipping.js.map