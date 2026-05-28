import { Cart } from "../oop/Cart.js";
import { Money } from "./Money.js";

export interface Shipping {
    estimatedDeliveryDays(): number;
    calculateCost(cart: Cart): Money;
    validate(cart: Cart): void;
}