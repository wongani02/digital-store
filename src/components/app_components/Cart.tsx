'use client'

import { FunctionComponent } from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

interface CartProps {
    
}
 
const Cart: FunctionComponent<CartProps> = () => {

    const itemsCount = 0;

    return ( 
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 "/>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-lg pr-0">
                <SheetHeader className="pr-6 space-y-2.5">
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                <div className={'h-full flex-1'}>
                    {itemsCount ? (
                        <>
                            <div className="flex w-full flex-col pr-6">
                                Cart items
                                {/* TODO: Cart Logic */}
                            </div>
                            <div className="space-y-4 pr-6">
                                <Separator/>
                                <div className="space-y-1.5 text-sm">
                                    <div className="flex">
                                        <span className="flex-1 ">
                                            Shipping
                                        </span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1 ">
                                            Transaction fee
                                        </span>
                                        <span>{formatPrice(1000)}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1 ">
                                            Total
                                        </span>
                                        <span>{formatPrice(1000)}</span>
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetTrigger asChild>
                                        <Link 
                                        className={buttonVariants({className: 'w-full'})}
                                        href={'/cart'}>Countinue To Checkout</Link>
                                    </SheetTrigger>
                                </SheetFooter>
                            </div>
                        </>
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center space-y-1">
                            <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <Image
                                src={'/hippo-empty-cart.png'}
                                alt="empty cart"
                                fill
                                />
                            </div>
                            <div className="text-xl font-semibold">Your Cart is Empty</div>
                            <SheetTrigger asChild>
                                <Link 
                                className={buttonVariants({
                                    variant: 'link',
                                    size: 'sm',
                                    className: 'text-sm text-muted-foreground'})}
                                href={'/products'}>Countinue Shopping &rarr;</Link>
                            </SheetTrigger>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
 
export default Cart;