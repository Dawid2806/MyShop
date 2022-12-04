import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import Link from 'next/link'
import React from 'react'
import { useCartState } from '../../../hooks/useContext'

export const CartItem = () => {
    const cartState = useCartState()

  return (
    <Link  href="/cart">
    <button type="button"className="relative mr-16 lg:mr-8 rounded-full bg-gray-800 p-1 text-gray-400 ">
        <span className='absolute mx-1 text-white '>{cartState.items.length === 0 ? null : cartState.items.length}</span>
        <span className="sr-only">Cart</span>
                <ShoppingCartIcon className="h-6 w-6 mr-10" aria-hidden="true"/>
    </button>
    </Link>
  )
}
