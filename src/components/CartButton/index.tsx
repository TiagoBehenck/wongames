import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'
import Button, { ButtonProps } from 'components/Button'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  hasText = false,
  size = 'small'
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  const icon = isInCart(id) ? (
    <RemoveShoppingCart aria-label="remove from cart" />
  ) : (
    <AddShoppingCart aria-label="Add to cart" />
  )

  const handleClick = () => (isInCart(id) ? removeFromCart(id) : addToCart(id))

  return (
    <Button icon={icon} size={size} onClick={() => handleClick()}>
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
