import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const icon = isInCart(id) ? (
    <RemoveShoppingCart aria-label="remove from cart" />
  ) : (
    <AddShoppingCart aria-label="Add to cart" />
  )

  const handleClick = () => (isInCart(id) ? removeFromCart(id) : addToCart(id))

  return <Button icon={icon} size="small" onClick={() => handleClick()} />
}

export default CartButton
