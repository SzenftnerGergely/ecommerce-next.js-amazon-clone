'use client'

import { useState, useTransition } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { incrementProductQuantity } from './actions'

interface AddToCartButtonProps {
  productId: string,
  incrementProductQuantity: (productId: string) => Promise<void>
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const [isPending, startTranstion] = useTransition()
  const [success, setSuccess] = useState(false)

  return (
    <div className="item-center flex gap-2">
      <button className="btn btn-primary"
        onClick={() => {
          setSuccess(false)
          startTranstion(async () => {
            await incrementProductQuantity(productId)
            setSuccess(true)
          })
        }}
      >
        Add to Cart
        <BsCart2 className="text-lg" />
      </button>
      {isPending && <span className='loading loading-spinner loading-md'/>}
      {!isPending && success && <span className='text-success'>Added to Cart.</span>}
    </div>
  )
}

export default AddToCartButton
