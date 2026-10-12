import { CheckoutService } from './checkout.service.js';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CreateCheckoutDto } from './dto/create-checkout.dto.js';
export declare class CheckoutController {
    private readonly checkoutService;
    constructor(checkoutService: CheckoutService);
    calculateDiscount(query: CheckoutQueryDto, body: CreateCheckoutDto): {
        success: boolean;
        message: string;
        data: {
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
    };
}
