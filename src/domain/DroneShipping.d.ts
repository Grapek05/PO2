import { Cart } from "../oop/Cart.js";
import { Money } from "./Money.js";
import { Shipping } from "./Shipping.js";
export declare class DroneShipping implements Shipping {
    private readonly maxSize;
    private readonly freeShippingThreshold;
    private readonly baseCost;
    estimatedDeliveryDays(): number;
    calculateCost(cart: Cart): Money;
    validate(cart: Cart): void;
}
//# sourceMappingURL=DroneShipping.d.ts.map