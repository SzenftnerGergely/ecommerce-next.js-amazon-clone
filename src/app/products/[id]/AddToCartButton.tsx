'use client'

import { BsCart2 } from 'react-icons/bs'

interface AddToCartButtonProps {
  productId: string
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  return (
    <div className="item-center flex gap-2">
      <button className="btn btn-primary" onClick={() => {}}>
        Add to Cart
        <BsCart2 className="text-lg" />
      </button>
    </div>
  )
}

export default AddToCartButton
