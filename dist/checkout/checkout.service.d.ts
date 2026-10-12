import { CreateCheckoutDto } from './dto/create-checkout.dto.js';
export declare class CheckoutService {
    calculateDiscount(body: CreateCheckoutDto, member: boolean, coupon?: string): {
        discounts: {
            member: number;
            coupon: number;
            total: number;
        };
        grandTotal: number;
        coupon?: string | undefined;
        subtotal: number;
        member: boolean;
    };
}
