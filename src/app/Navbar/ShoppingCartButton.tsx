"use client"

import { ShoppingCart } from "@/lib/db/cart"
import { formatPrice } from "@/lib/db/format"
import Link from "next/link"
import { BsCart2 } from "react-icons/bs"

interface ShoppingCartButtonProps {
    cart: ShoppingCart | null
}

const ShoppingCartButton = ({ cart }: ShoppingCartButtonProps) => {

    function closeDropdown() {
        const elem = document.activeElement as HTMLElement
        if(elem) {
            elem.blur()
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <label htmlFor="" tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                    <BsCart2 className="text-2xl" />
                    <span className="badge badge-sm indicator-item">
                        {cart?.size || 0}
                    </span>
                </div>
            </label>
            <div
                tabIndex={0}
                className="card dropdown-content card-compact mt-3 
                w-52 bg-base-100 shadow z-30"
            >
                <div className="card-body">
                    <span className="text-lg font-bold">{cart?.size || 0} Items</span>
                    <span className="text-info"> Subtotal: {formatPrice(cart?.subtotal || 0)}</span>
                    <div className="card-actions">
                        <Link
                            href="/cart"
                            className="btn btn-primary btn-block"
                            onClick={closeDropdown}
                        >
                            View Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartButton
